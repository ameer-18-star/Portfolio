#!/usr/bin/env python3
"""
push_changes.py

Stages, commits, and pushes all pending changes in the portfolio repo
(picto-main) to GitHub, using a commit message that summarizes the
edits made in this session:

  - NavBar.jsx       : removed the header/mobile "Download Resume" button
  - Hero.jsx          : removed the hero "Download CV" button; turned the
                        pentester/instructor text links into real buttons
  - Footer.jsx        : removed the generic resume link; added separate
                        "Instructor Resume" and "Pentester Resume" buttons
  - InstructorPage.jsx: added a hero "Download Resume" button; made award
                        cards open a details modal (using the shared
                        Modal component, matching the Credentials section)
  - PentesterPage.jsx : added a hero "Download Resume" button
  - Contact.jsx       : fixed the LinkedIn link, added the real email and
                        Google Form URL, split the Resume card into
                        separate Instructor/Pentester resume cards
  - Form.jsx          : fixed a bug where invalid input showed a false
                        "success" message; added Formspree submission
                        support with a mailto fallback

Usage:
    python push_changes.py [--repo PATH] [--message TEXT] [--no-push]
                            [--remote origin] [--branch BRANCH]

By default it operates on the current directory, auto-detects the
current branch, and pushes to "origin" after committing. Use --no-push
to only stage and commit locally.
"""

import argparse
import subprocess
import sys


COMMIT_SUMMARY = "Resume buttons, award modal, and Contact section fixes"

COMMIT_BODY = """\
- NavBar.jsx: remove header/mobile Download Resume button
- Hero.jsx: remove hero Download CV button; convert pentester/instructor
  links into buttons
- Footer.jsx: remove generic resume link; add Instructor Resume and
  Pentester Resume buttons
- InstructorPage.jsx: add hero Download Resume button; award cards open
  a details modal via the shared Modal component
- PentesterPage.jsx: add hero Download Resume button
- Contact.jsx: set real LinkedIn link, email, and Google Form URL; split
  Resume card into Instructor/Pentester resume cards
- Form.jsx: fix invalid-input bug that showed a false success message;
  add Formspree submission with a mailto fallback
"""


def run(cmd, cwd, check=True):
    """Run a command and return (returncode, stdout, stderr)."""
    result = subprocess.run(
        cmd, cwd=cwd, capture_output=True, text=True
    )
    if check and result.returncode != 0:
        print(f"Command failed: {' '.join(cmd)}")
        if result.stdout.strip():
            print(result.stdout)
        if result.stderr.strip():
            print(result.stderr)
        sys.exit(result.returncode)
    return result.returncode, result.stdout.strip(), result.stderr.strip()


def main():
    parser = argparse.ArgumentParser(description="Commit and push portfolio changes.")
    parser.add_argument("--repo", default=".", help="Path to the git repository (default: current directory)")
    parser.add_argument("--message", default=None, help="Override the commit message entirely")
    parser.add_argument("--no-push", action="store_true", help="Commit locally only, skip pushing")
    parser.add_argument("--remote", default="origin", help="Remote name to push to (default: origin)")
    parser.add_argument("--branch", default=None, help="Branch to push to (default: current branch)")
    args = parser.parse_args()

    repo = args.repo

    # Make sure this is actually a git repo
    code, _, _ = run(["git", "rev-parse", "--is-inside-work-tree"], cwd=repo, check=False)
    if code != 0:
        print(f"'{repo}' does not look like a git repository.")
        sys.exit(1)

    # Anything to commit?
    _, status_out, _ = run(["git", "status", "--porcelain"], cwd=repo)
    if not status_out:
        print("Nothing to commit — working tree is already clean.")
        sys.exit(0)

    print("Changes detected:")
    print(status_out)
    print()

    # Stage everything
    run(["git", "add", "-A"], cwd=repo)

    # Build the commit message
    message = args.message if args.message else f"{COMMIT_SUMMARY}\n\n{COMMIT_BODY}"

    # Commit
    run(["git", "commit", "-m", message], cwd=repo)
    print("Committed changes.")

    if args.no_push:
        print("Skipping push (--no-push was set).")
        return

    # Determine branch
    branch = args.branch
    if not branch:
        _, branch, _ = run(["git", "rev-parse", "--abbrev-ref", "HEAD"], cwd=repo)

    print(f"Pushing to {args.remote}/{branch} ...")
    code, out, err = run(["git", "push", args.remote, branch], cwd=repo, check=False)
    if code != 0:
        print("Push failed. This usually means the remote has commits you don't have locally.")
        print("Try: git pull --rebase", args.remote, branch, "then re-run this script.")
        print(err)
        sys.exit(code)

    print("Push successful.")
    if out:
        print(out)


if __name__ == "__main__":
    main()
