#!/usr/bin/env python3
"""Add a line to a wayfinder map's index sections without clobbering concurrent edits.

  python3 scripts/wayfinder_map.py add-decision <map> <ticket> "<gist>"
  python3 scripts/wayfinder_map.py add-out-of-scope <map> <ticket> "<gist>"

Builds "- [<ticket title>](<ticket url>): <gist>" from the ticket itself, then appends it to the
end of "## Decisions so far" or "## Out of scope" in the map issue's body. The body is fetched
immediately before the write and checked again after it, so a line another session added in
between survives, and a lost write is reported instead of passing silently.
"""
import json
import subprocess
import sys

SECTIONS = {"add-decision": "## Decisions so far", "add-out-of-scope": "## Out of scope"}


def gh(*args, stdin=None):
    return subprocess.run(["gh", *args], input=stdin, capture_output=True, text=True, check=True).stdout


def issue(number):
    return json.loads(gh("issue", "view", str(number), "--json", "title,url,body"))


def insert(body, heading, line):
    lines = body.split("\n")
    try:
        start = lines.index(heading)
    except ValueError:
        sys.exit(f"Map has no '{heading}' section")
    end = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
    # after the section's last non-blank line, keeping the blank line before the next heading
    last = max((i for i in range(start + 1, end) if lines[i].strip()), default=start)
    lines.insert(last + 1, line)
    return "\n".join(lines)


def main():
    if len(sys.argv) != 5 or sys.argv[1] not in SECTIONS:
        sys.exit(__doc__)
    command, map_number, ticket_number, gist = sys.argv[1:]
    ticket = issue(ticket_number)
    marker = f"]({ticket['url']})"
    line = f"- [{ticket['title']}]({ticket['url']}): {gist.strip()}"

    body = issue(map_number)["body"]
    if marker in body:
        sys.exit(f"Map already links {ticket['title']}; edit that line by hand")
    gh("issue", "edit", map_number, "--body-file", "-", stdin=insert(body, SECTIONS[command], line))

    if marker not in issue(map_number)["body"]:
        sys.exit("Write was overwritten by a concurrent edit; run the command again")
    print(f"Added to {SECTIONS[command][3:]}: {ticket['title']}")


if __name__ == "__main__":
    main()
