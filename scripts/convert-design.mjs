#!/usr/bin/env node
// Converts the Claude Design prototype (`project/Primary v3.dc.html` by default)
// into React/TSX components for the Next.js app.
//
// The prototype is a "dc" document: an HTML template with {{ path }} bindings,
// <sc-if value> / <sc-for list as> control flow and style-hover/style-focus
// pseudo styles, plus a `class Component extends DCLogic` script whose
// renderVals() returns the object the template binds to.
//
// Output:
//   components/control-tower/views/*.tsx   – one file per screen / panel
//   components/control-tower/logic.ts      – the prototype's state + behaviour
//   app/design-pseudo.css                  – :hover / :focus rules
//
// Usage: npm run convert-design [-- path/to/export.dc.html]   (re-run after exporting a new design version)

import fs from "node:fs";
import path from "node:path";
import { parseFragment } from "parse5";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SRC = path.resolve(ROOT, process.argv[2] || path.join("project", "Primary v3.dc.html"));
const SRC_REL = path.relative(ROOT, SRC);
const OUT_VIEWS = path.join(ROOT, "components", "control-tower", "views");
const OUT_LOGIC = path.join(ROOT, "components", "control-tower", "logic.ts");
const OUT_CSS = path.join(ROOT, "app", "design-pseudo.css");

const src = fs.readFileSync(SRC, "utf8");

// ---------------------------------------------------------------- extract
const tplStart = src.indexOf("<x-dc>") + "<x-dc>".length;
const tplEnd = src.lastIndexOf("</x-dc>");
let template = src.slice(tplStart, tplEnd);
template = template.replace(/<helmet>[\s\S]*?<\/helmet>/, "");

const scriptOpen = src.indexOf("<script type=\"text/x-dc\"");
const scriptBodyStart = src.indexOf(">", scriptOpen) + 1;
const scriptBodyEnd = src.lastIndexOf("</script>");
const script = src.slice(scriptBodyStart, scriptBodyEnd);

// ---------------------------------------------------------------- parse
// Same trick as the dc runtime: rename table/select tags so the HTML parser
// does not foster-parent <sc-for>/<sc-if> out of them.
const RAW = ["select", "table", "tbody", "thead", "tfoot", "tr", "td", "th", "caption"];
for (const t of RAW) {
  template = template.replace(new RegExp("(</?)" + t + "(?=[\\s>])", "gi"), "$1sc-raw-" + t);
}
const frag = parseFragment(template);
const realTag = (t) => (t.startsWith("sc-raw-") ? t.slice(7) : t);

// ---------------------------------------------------------------- helpers
const EVENT_MAP = {
  onclick: "onClick", onchange: "onChange", oninput: "onInput", onsubmit: "onSubmit",
  onkeydown: "onKeyDown", onkeyup: "onKeyUp", onkeypress: "onKeyPress",
  onmousedown: "onMouseDown", onmouseup: "onMouseUp", onmouseenter: "onMouseEnter",
  onmouseleave: "onMouseLeave", onfocus: "onFocus", onblur: "onBlur",
  ondragstart: "onDragStart", ondragend: "onDragEnd", ondragenter: "onDragEnter",
  ondragleave: "onDragLeave", ondragover: "onDragOver", ondrop: "onDrop",
};
const ATTR_MAP = {
  class: "className", for: "htmlFor", autocomplete: "autoComplete", crossorigin: "crossOrigin",
  tabindex: "tabIndex", readonly: "readOnly", maxlength: "maxLength", colspan: "colSpan",
  rowspan: "rowSpan", spellcheck: "spellCheck", autofocus: "autoFocus",
};
const NUMERIC = new Set(["rows", "cols", "size", "tabIndex", "maxLength", "colSpan", "rowSpan"]);
const VOID = new Set(["img", "input", "br", "hr", "meta", "link", "source", "area", "col", "wbr"]);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const BIND = /\{\{([\s\S]+?)\}\}/g;
const hasBind = (s) => /\{\{[\s\S]+?\}\}/.test(s);
const tplEscape = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

function splitTopLevel(expr, ops) {
  let q = null, depth = 0;
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i];
    if (q) { if (c === q) q = null; continue; }
    if (c === "'" || c === '"') { q = c; continue; }
    if (c === "(" || c === "[") depth++;
    else if (c === ")" || c === "]") depth--;
    else if (depth === 0) for (const op of ops) if (expr.startsWith(op, i)) return { i, op };
  }
  return null;
}

// Translate a dc binding expression into a JS expression against `v`
// (the renderVals object) and the in-scope loop variables.
function jsExpr(raw, scope) {
  const e = raw.trim();
  if (e.startsWith("(") && e.endsWith(")")) return "(" + jsExpr(e.slice(1, -1), scope) + ")";
  const eq = splitTopLevel(e, ["===", "!==", "==", "!="]);
  if (eq) return jsExpr(e.slice(0, eq.i), scope) + " " + eq.op + " " + jsExpr(e.slice(eq.i + eq.op.length), scope);
  if (e.startsWith("!")) return "!" + jsExpr(e.slice(1), scope);
  if (["true", "false", "null", "undefined"].includes(e)) return e;
  if (/^-?\d+(\.\d+)?$/.test(e)) return e;
  if (/^(['"]).*\1$/.test(e)) return JSON.stringify(e.slice(1, -1));
  const m = e.match(/^[A-Za-z_$][\w$]*/);
  if (!m) throw new Error("Unsupported binding: " + raw);
  const head = m[0];
  const rest = e.slice(head.length).replace(/\./g, "?.").replace(/\[/g, "?.[");
  return (scope.includes(head) ? head : "v." + head) + rest;
}

function interp(str, scope, fallback = '""') {
  const parts = str.split(BIND);
  return "`" + parts.map((p, i) => (i & 1 ? "${" + jsExpr(p, scope) + " ?? " + fallback + "}" : tplEscape(p))).join("") + "`";
}

function styleObj(css, scope) {
  const decls = css.split(";").map((d) => d.trim()).filter(Boolean);
  const out = new Map();
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0 || hasBind(d.slice(0, i))) return null;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    // "-webkit-appearance" -> WebkitAppearance, the same mapping the dc runtime applies.
    const key = prop.startsWith("--") ? JSON.stringify(prop) : /^-?[a-z][\w-]*$/.test(prop) ? camel(prop) : JSON.stringify(prop);
    out.set(key, hasBind(val) ? (/^\{\{[^}]*\}\}$/.test(val) ? jsExpr(val.slice(2, -2), scope) : interp(val, scope)) : JSON.stringify(val));
  }
  return "{ " + [...out].map(([k, v]) => k + ": " + v).join(", ") + " }";
}

// ---------------------------------------------------------------- pseudo css
const pseudo = new Map();
function pseudoClass(kind, css) {
  const k = kind + "|" + css;
  if (!pseudo.has(k)) {
    const cls = "dc-" + kind + "-" + pseudo.size;
    const vars = [];
    const ruleCss = css.replace(BIND, (_, expr) => {
      const name = `--${cls}-${vars.length}`;
      vars.push({ name, expr });
      return `var(${name})`;
    });
    pseudo.set(k, { cls, kind, css: ruleCss, vars });
  }
  return pseudo.get(k);
}
const importantify = (css) =>
  css.split(";").map((d) => d.trim()).filter(Boolean).map((d) => (/!important$/.test(d) ? d : d + " !important")).join(";");

// ---------------------------------------------------------------- emit
const attrOf = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const isWs = (n) => n.nodeName === "#text" && !n.value.trim();
const FLOWLESS = /display:\s*(flex|grid|inline-flex|inline-grid)/;

function emitAttrs(node, scope) {
  const out = [];
  const classes = [];
  const cssVars = [];
  let style = null;
  for (const { name, value } of node.attrs) {
    if (name.startsWith("hint-") || name === "sc-name" || name === "data-dc-tpl") continue;
    if (name.startsWith("style-")) {
      const p = pseudoClass(name.slice(6), value);
      classes.push(p.cls);
      for (const v of p.vars) cssVars.push(`${JSON.stringify(v.name)}: ${jsExpr(v.expr, scope)}`);
      continue;
    }
    if (name === "style") {
      if (/^\s*\{\{[^}]*\}\}\s*$/.test(value)) style = { spread: `S(${jsExpr(value.trim().slice(2, -2), scope)})` };
      else {
        const o = styleObj(value, scope);
        style = o ? { literal: o } : { spread: `S(${interp(value, scope)})` };
      }
      continue;
    }
    let key = name;
    if (key.startsWith("on")) key = EVENT_MAP[key] || "on" + key[2].toUpperCase() + key.slice(3);
    else if (ATTR_MAP[key]) key = ATTR_MAP[key];
    else if (key.includes("-") && !key.startsWith("data-") && !key.startsWith("aria-")) key = camel(key);
    if (key === "className") { classes.unshift(value); continue; }
    let val = value;
    if (key === "src" && val.startsWith("./assets/")) val = val.slice(1);
    if (hasBind(val)) {
      const whole = val.trim().match(/^\{\{([^}]*)\}\}$/);
      let ex = whole ? jsExpr(whole[1], scope) : interp(val, scope);
      if (whole && key === "value") ex += ' ?? ""';
      if (whole && key === "checked") ex += " ?? false";
      out.push(`${key}={${ex}}`);
    } else if (NUMERIC.has(key) && /^\d+$/.test(val)) out.push(`${key}={${val}}`);
    else if (/^[^"&{}\\\n]*$/.test(val)) out.push(`${key}="${val}"`);
    else out.push(`${key}={${JSON.stringify(val)}}`);
  }
  if (cssVars.length) {
    const base = style?.literal ? style.literal.slice(2, -2) : style?.spread ? "..." + style.spread : "";
    out.unshift(`style={S({ ${[base, ...cssVars].filter(Boolean).join(", ")} })}`);
  } else if (style) out.unshift(`style={${style.literal ?? style.spread}}`);
  if (classes.length) out.push(`className="${classes.join(" ")}"`);
  return out.length ? " " + out.join(" ") : "";
}

function emitText(node, ctx, pad, flowless = false) {
  const txt = flowless ? node.value.trim() : node.value;
  if (!txt.trim()) return txt.includes(" ") || ctx.pre ? [pad + (ctx.pre ? `{${JSON.stringify(txt)}}` : '{" "}')] : [];
  if (ctx.pre) {
    return [pad + txt.split(BIND).map((p, i) => (i & 1 ? `{T(${jsExpr(p, ctx.scope)})}` : p ? `{${JSON.stringify(p)}}` : "")).join("")];
  }
  const collapsed = txt.replace(/\s+/g, " ");
  const lead = collapsed.startsWith(" ");
  const trail = collapsed.endsWith(" ");
  const core = collapsed.trim();
  const body = core.split(BIND).map((p, i) => {
    if (i & 1) return `{T(${jsExpr(p, ctx.scope)})}`;
    if (!p) return "";
    if (/^[^{}<>&]*$/.test(p) && !/^ | $/.test(p)) return p;
    return `{${JSON.stringify(p)}}`;
  }).join("");
  return [pad + (lead ? '{" "}' : "") + body + (trail ? '{" "}' : "")];
}

function emitChildren(nodes, ctx, depth, parentEl) {
  const kids = [...nodes];
  // Whitespace never renders inside flex/grid containers or at the edges of a block.
  const flowless = parentEl && (FLOWLESS.test(attrOf(parentEl, "style") || "") || ["svg", "select", "table", "tbody", "thead", "tr"].includes(realTag(parentEl.nodeName)));
  const lines = [];
  kids.forEach((k, i) => {
    if (isWs(k) && !ctx.pre) {
      if (flowless || i === 0 || i === kids.length - 1) return;
    }
    lines.push(...(k.nodeName === "#text" ? emitText(k, ctx, "  ".repeat(depth), flowless && !ctx.pre) : emitNode(k, ctx, depth)));
  });
  return lines;
}

// Component name for each top-level screen / panel, keyed by its <sc-if value>.
// A new top-level <sc-if> in a future export must be named here (the script stops otherwise).
const SECTION_NAMES = {
  askShown: "AskPanel", isHome: "HomeView", isPrime: "PrimeView", isPrimeTab: "AskPrimeView",
  "na.open": "NewActionModal", isInbox: "ActionsView", isStudies: "EnrollmentView",
  "bu.open": "InvoiceUploadModal", isBudget: "BudgetView", isBySiteList: "SitesListView",
  isBySite: "SiteDetailView", "ec.open": "PrimeChatPanel", isSites: "StudySitesView",
  isEng: "EngagementsView", isEngPerfTab: "EngagementPerformanceView", isSystems: "ConnectorsView",
  isStudio: "StudioView", isReg: "RegulatoryView", isActivity: "AuditTrailView",
  "cm.open": "ConnectSystemModal",
};
// Elements whose <sc-if> children become separate components (set once the root is parsed).
const shellContainers = new Set();
const sections = [];

function emitNode(node, ctx, depth) {
  const pad = "  ".repeat(depth);
  if (node.nodeName === "#comment") return [];
  if (node.nodeName === "#text") return emitText(node, ctx, pad);
  const tag = node.nodeName;

  if (tag === "sc-if") {
    const cond = jsExpr(attrOf(node, "value").replace(/^\s*\{\{|\}\}\s*$/g, ""), ctx.scope);
    const condRaw = attrOf(node, "value").replace(/^\s*\{\{|\}\}\s*$/g, "").trim();
    if (ctx.splitSections && shellContainers.has(ctx.parentEl)) {
      const name = SECTION_NAMES[condRaw];
      if (!name) throw new Error(`New top-level section <sc-if value="{{ ${condRaw} }}">: add a component name to SECTION_NAMES`);
      sections.push({ name, nodes: node.childNodes, parent: ctx.parentEl });
      return [`${pad}{${cond} ? <${name} v={v} /> : null}`];
    }
    const inner = emitChildren(node.childNodes, ctx, depth + 2, ctx.parentEl);
    if (!inner.length) return [];
    return [`${pad}{${cond} ? (`, `${pad}  <>`, ...inner, `${pad}  </>`, `${pad}) : null}`];
  }

  if (tag === "sc-for") {
    const list = jsExpr(attrOf(node, "list").replace(/^\s*\{\{|\}\}\s*$/g, ""), ctx.scope);
    const as = attrOf(node, "as") || "item";
    const sub = { ...ctx, scope: [...ctx.scope, as, "$index"] };
    const elems = node.childNodes.filter((n) => !isWs(n) && n.nodeName !== "#comment");
    const single = elems.length === 1 && !elems[0].nodeName.startsWith("#") && !elems[0].nodeName.startsWith("sc-");
    if (single) {
      const inner = emitNode(elems[0], { ...sub, key: "$index" }, depth + 1);
      return [`${pad}{L(${list}).map((${as}, $index) => (`, ...inner, `${pad}))}`];
    }
    const inner = emitChildren(node.childNodes, sub, depth + 2, ctx.parentEl);
    return [`${pad}{L(${list}).map((${as}, $index) => (`, `${pad}  <Fragment key={$index}>`, ...inner, `${pad}  </Fragment>`, `${pad}))}`];
  }

  const rt = realTag(tag);
  if (ctx.splitSections && ((rt === "aside" && ctx.parentEl === rootEl) || (rt === "header" && ctx.parentEl?.nodeName === "main"))) {
    const name = rt === "aside" ? "Sidebar" : "TopBar";
    sections.push({ name, nodes: [node], parent: ctx.parentEl });
    return [`${pad}<${name} v={v} />`];
  }
  const keyAttr = ctx.key ? ` key={${ctx.key}}` : "";
  const attrs = keyAttr + emitAttrs(node, ctx.scope);
  const pre = ctx.pre || /white-space:\s*pre/.test(attrOf(node, "style") || "");
  const childCtx = { ...ctx, key: null, pre, parentEl: node };
  const kidNodes = node.nodeName === "template" ? node.content.childNodes : node.childNodes;
  const kids = emitChildren(kidNodes, childCtx, depth + 1, node);
  if (!kids.length) return [`${pad}<${rt}${attrs} />`];
  if (VOID.has(rt)) return [`${pad}<${rt}${attrs} />`];
  if (kids.length === 1 && kids[0].trim().length + attrs.length + rt.length * 2 + pad.length < 140 && !kids[0].trim().startsWith("<") && !kids[0].trim().startsWith("{L(")) {
    return [`${pad}<${rt}${attrs}>${kids[0].trim()}</${rt}>`];
  }
  return [`${pad}<${rt}${attrs}>`, ...kids, `${pad}</${rt}>`];
}

// ---------------------------------------------------------------- build files
const HEADER = (name) =>
  `// ${name} — generated from "${SRC_REL}" by scripts/convert-design.mjs.\n` +
  `// Edit the design export and re-run \`npm run convert-design\`, or edit this file directly.\n`;

function viewFile(name, body, uses) {
  const imports = [];
  if (body.includes("<Fragment")) imports.push(`import { Fragment } from "react";`);
  const helpers = ["L", "S", "T"].filter((h) => new RegExp("\\b" + h + "\\(").test(body));
  imports.push(`import { ${[...helpers, "type Vals"].join(", ")} } from "../dc";`);
  for (const u of uses) imports.push(`import { ${u} } from "./${u}";`);
  return HEADER(name) + "\n" + imports.join("\n") + "\n\n" +
    `export function ${name}({ v }: { v: Vals }) {\n  return (\n    <>\n${body}\n    </>\n  );\n}\n`;
}

const rootEl = frag.childNodes.find((n) => n.nodeName === "div");
shellContainers.add(rootEl);
const mainEl = rootEl.childNodes.find((n) => n.nodeName === "main");
if (mainEl) shellContainers.add(mainEl);
const shellLines = emitNode(rootEl, { scope: [], splitSections: true, pre: false, parentEl: null }, 3);
const shellUses = sections.map((s) => s.name);

fs.mkdirSync(OUT_VIEWS, { recursive: true });
for (const f of fs.readdirSync(OUT_VIEWS)) fs.unlinkSync(path.join(OUT_VIEWS, f));
fs.writeFileSync(path.join(OUT_VIEWS, "Shell.tsx"), viewFile("Shell", shellLines.join("\n"), shellUses));
for (const s of sections) {
  const lines = emitChildren(s.nodes, { scope: [], splitSections: false, pre: false, parentEl: s.parent }, 3, null)
    .filter((l, i, a) => !(l.trim() === '{" "}' && (i === 0 || i === a.length - 1)));
  fs.writeFileSync(path.join(OUT_VIEWS, s.name + ".tsx"), viewFile(s.name, lines.join("\n"), []));
}

// ---------------------------------------------------------------- pseudo css
fs.writeFileSync(
  OUT_CSS,
  "/* Generated by scripts/convert-design.mjs from the design's style-hover / style-focus attributes. */\n" +
    [...pseudo.values()].map((p) => `.${p.cls}:${p.kind} { ${importantify(p.css).replace(/;/g, "; ")}; }`).join("\n") + "\n",
);

// ---------------------------------------------------------------- logic
let logic = script
  .replace(/window\.claude\.complete\(/g, "complete(")
  .replace(/'\.\/assets\//g, "'/assets/");
if (/window\.claude/.test(logic)) throw new Error("Unhandled window.claude usage in design script");
fs.writeFileSync(
  OUT_LOGIC,
  "// @ts-nocheck — the prototype's behaviour, ported verbatim from the design export.\n" +
    HEADER("Control Tower logic") +
    `import React from "react";\nimport { DCLogic } from "./dc";\nimport { complete } from "@/lib/claude";\n` +
    logic.trimEnd() + "\n\nexport default Component;\n",
);

console.log(`Wrote ${sections.length + 1} views, ${pseudo.size} pseudo rules, logic.ts`);
