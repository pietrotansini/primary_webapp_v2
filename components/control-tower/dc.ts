// Small runtime helpers shared by the generated views and the logic class.
// They reproduce the binding semantics of the Claude Design "dc" runtime.
import { isValidElement, type CSSProperties, type ReactNode } from "react";

// The flat object returned by Component.renderVals(); its shape is defined by the design.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Vals = any;

/** Text interpolation: render elements/arrays as-is, hide null/undefined/booleans. */
export function T(value: unknown): ReactNode {
  if (value === undefined || value === null || typeof value === "boolean") return null;
  if (isValidElement(value) || Array.isArray(value)) return value as ReactNode;
  return String(value);
}

/** <sc-for list>: anything that is not an array renders nothing. */
export function L<T = Vals>(list: unknown): T[] {
  return Array.isArray(list) ? (list as T[]) : [];
}

const kebabToCamel = (s: string) => s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

/** A style attribute that is (partly) bound to a value: accept a CSS string or a style object. */
export function S(style: unknown): CSSProperties | undefined {
  if (style && typeof style === "object") return style as CSSProperties;
  if (typeof style !== "string") return undefined;
  const out: Record<string, string> = {};
  for (const decl of style.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    out[prop.startsWith("--") ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
  }
  return out as CSSProperties;
}

type Host = {
  __setLogicState(update: unknown, cb?: () => void): void;
  forceUpdate(): void;
};

/** Base class for the design's `class Component extends DCLogic`. */
export class DCLogic<P = Vals, St = Vals> {
  props: P;
  state = {} as St;
  __host?: Host;

  constructor(props: P) {
    this.props = props || ({} as P);
  }

  setState(update: Partial<St> | ((prev: St) => Partial<St>), cb?: () => void) {
    this.__host?.__setLogicState(update, cb);
  }

  forceUpdate() {
    this.__host?.forceUpdate();
  }

  componentDidMount() {}
  componentDidUpdate(_prevProps: P) {}
  componentWillUnmount() {}

  renderVals(): Vals {
    return {};
  }
}
