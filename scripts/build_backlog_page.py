#!/usr/bin/env python3
"""Rebuild the data in the Control Tower MVP Backlog page from the docs.

The page (docs/pages/mvp-backlog.html) embeds two arrays:
  SC  the Scenario rows of docs/scenarios.md
  BL  the "Priorities and sizes" table of docs/mvp-backlog.md
This script rewrites both from the Markdown, so the docs stay the single source of truth.

  python3 scripts/build_backlog_page.py           rewrite the page
  python3 scripts/build_backlog_page.py --check   exit 1 if the page is out of date

Publish the page afterwards with the Artifact tool, to the URL in AGENTS.md.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCENARIOS = ROOT / "docs/scenarios.md"
BACKLOG = ROOT / "docs/mvp-backlog.md"
PAGE = ROOT / "docs/pages/mvp-backlog.html"
DASH = "–"


def cells(line):
    """Split a Markdown table row into stripped cells, honouring escaped pipes."""
    parts = re.split(r"(?<!\\)\|", line.strip().strip("|"))
    return [p.replace("\\|", "|").strip() for p in parts]


def tables(text):
    """Yield (header, rows) for every Markdown table in text."""
    lines = text.splitlines()
    i = 0
    while i < len(lines) - 1:
        if lines[i].lstrip().startswith("|") and re.match(r"^\s*\|[\s|:-]+\|\s*$", lines[i + 1]):
            header, rows, i = cells(lines[i]), [], i + 2
            while i < len(lines) and lines[i].lstrip().startswith("|"):
                rows.append(dict(zip(header, cells(lines[i]))))
                i += 1
            yield header, rows
        else:
            i += 1


def plain(s):
    """Markdown cell to page text: drop backticks and emphasis."""
    return re.sub(r"[`*]", "", s).strip()


def split_list(s):
    return [x.strip() for x in s.split(",") if x.strip()]


def scenarios():
    out = []
    for header, rows in tables(SCENARIOS.read_text()):
        if header[:2] != ["ID", "Scenario"]:
            continue
        for r in rows:
            out.append({
                "id": r["ID"], "t": r["Scenario"], "st": r["Status"], "tr": r["Trigger"],
                "data": r["Data"], "av": split_list(r["Avail."]), "an": r["Analysis"],
                "te": r["Tech"], "f": split_list(r["Features"]), "v": r["Value"],
                "sz": r["Size"], "demo": plain(r["Demo"]),
            })
    if not out:
        sys.exit(f"No Scenario tables found in {SCENARIOS.relative_to(ROOT)}")
    return out


def moscow(s):
    """'Must (was *candidate*)' -> 'Must'; '*candidate*' -> 'Candidate'; 'Must / Should' -> 'Must'."""
    first = plain(s).split("(")[0].split("/")[0].strip()
    return "Candidate" if first.lower() == "candidate" else first


def backlog():
    for header, rows in tables(BACKLOG.read_text()):
        if header[:3] != ["#", "Feature", "MoSCoW"]:
            continue
        out = []
        for r in rows:
            first = plain(r.get("First Scenario", ""))
            moved = plain(r.get("Dependencies and risks", "") or r.get("Most likely moved by", ""))
            rank = re.match(r"(\d+) (\S+)$", first)
            first = f"First: {rank[2]} ({rank[1]})" if rank else first.capitalize()
            note = "; ".join(x for x in (first, moved) if x)
            m = plain(r["Milestone"]).split(" ")[0] or DASH
            out.append([r["#"], plain(r["Feature"]), moscow(r["MoSCoW"]),
                        r["FE"] or DASH, r["BE"] or DASH, m, note])
        return out
    sys.exit(f"No priorities table (# | Feature | MoSCoW ...) found in {BACKLOG.relative_to(ROOT)}")


def render(page):
    # One row per line, so a diff of the page (or an Artifact publish conflict) shows only the rows that changed.
    sc = "const SC = [\n" + ",\n".join("  " + json.dumps(r, ensure_ascii=False) for r in scenarios()) + "\n];"
    bl = "const BL = [\n" + ",\n".join("  " + json.dumps(r, ensure_ascii=False) for r in backlog()) + "\n];"
    # The first form is the one-line layout older pages used.
    page, n_sc = re.subn(r"^const SC = (?:\[\n.*?\n\]|\[[^\n]*\]);$", lambda _: sc, page, count=1, flags=re.M | re.S)
    page, n_bl = re.subn(r"^const BL = \[\n.*?\n\];$", lambda _: bl, page, count=1, flags=re.M | re.S)
    if n_sc != 1 or n_bl != 1:
        sys.exit(f"Could not find the SC and BL arrays in {PAGE.relative_to(ROOT)}")
    return page


def main():
    old = PAGE.read_text()
    new = render(old)
    if "--check" in sys.argv[1:]:
        if new != old:
            sys.exit(f"{PAGE.relative_to(ROOT)} is out of date: run python3 scripts/build_backlog_page.py")
        print("Backlog page data is up to date.")
        return
    PAGE.write_text(new)
    print(f"{'Updated' if new != old else 'No change to'} {PAGE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
