# PowerShell Proficiency Path
### Sourced directly from your two books: *Learn PowerShell in a Month of Lunches, 4th Edition* and *Learn PowerShell Scripting in a Month of Lunches, 2nd Edition*

Chapter titles below are pulled straight from each PDF's table of contents, not reconstructed from memory. Book 1 carries you from zero to competent. Book 2 is the natural sequel, real script design, testing, source control, publishing, so it anchors the Expert phase instead of being padding.

## How a lesson works

1. **The request.** A message like something your manager, a ticket, or a teammate would actually send.
2. **You respond in PowerShell.** Click hoverable syntax pieces or type your own, building on your previous step when the task chains together.
3. **Instant check.** Wrong-but-plausible commands actually "run" and show their real output before explaining why it falls short.
4. **Breakdown.** Every piece of the correct syntax explained, the wrong alternative explained, the ordering explained, a running glossary of core concepts that builds across lessons.
5. **Score.** Points per step based on clean solves vs. hints vs. reveals.

## Phase 1 — Beginner
*Book 1, chapters 2–8*

| # | Chapter | Status |
|---|---|---|
| 1 | Ch 2 — Meet PowerShell | **Built** |
| 2 | Ch 3 — Using the help system | **Built** |
| 3 | Ch 4 — Running commands | **Built** |
| 4 | Ch 5 — Working with providers | **Built** |
| 5 | Ch 6 — The pipeline: Connecting commands | **Built** |
| 6 | Ch 7 — Adding commands | **Built** |
| 7 | Ch 8 — Objects: Data by another name | **Built** |

## Phase 2 — Intermediate
*Book 1, chapters 9–19*

| # | Chapter | Status |
|---|---|---|
| 8 | Ch 9 — A practical interlude | **Built** |
| 9 | Ch 10 — The pipeline, deeper | **Built** |
| 10 | Ch 11 — Formatting: And why it's done on the right | **Built** |
| 11 | Ch 12 — Filtering and comparisons | **Built** |
| 12 | Ch 13 — Remote control: One-to-one and one-to-many | **Built** |
| 13 | Ch 14 — Multitasking with background jobs | **Built** |
| 14 | Ch 15 — Working with many objects, one at a time | **Built** |
| 15 | Ch 16 — Variables: A place to store your stuff | **Built** |
| 16 | Ch 17 — Input and output | **Built** |
| 17 | Ch 18 — Sessions: Remote control with less work | **Built** |
| 18 | Ch 19 — You call this scripting? | **Built** |

**Capstone (built):** *Pull this user's groups and permissions* — a locked-out coworker scenario chaining `Get-ADUser`, `Get-ADPrincipalGroupMembership`, `Where-Object`, and `Get-Acl`. Synthesis exercise sitting at the end of this phase, same spirit as the book's own "practical interlude."

## Phase 3 — Advanced
*Book 1, chapters 20–27 + appendix, then Book 2 Part 1, chapters 2–7*

| # | Chapter | Status |
|---|---|---|
| 19 | Book 1, Ch 20 — Improving your parameterized script | **Built** |
| 20 | Book 1, Ch 21 — Using regular expressions to parse text files | **Built** |
| 21 | Book 1, Ch 22 — Using someone else's script | **Built** |
| 22 | Book 1, Ch 23 — Adding logic and loops | **Built** |
| 23 | Book 1, Ch 24 — Handling errors | **Built** |
| 24 | Book 1, Ch 25 — Debugging techniques | **Built** |
| 25 | Book 1, Ch 26 — Tips, tricks, and techniques | **Built** |
| 26 | Book 1, Ch 27 — Never the end | **Built** |
| 27 | Book 1, Appendix — PowerShell cheat sheet | Reference, not scored |
| 28 | Book 2, Ch 2 — Setting up your scripting environment | **Built** |
| 29 | Book 2, Ch 3 — WWPD: What would PowerShell do? | **Built** |
| 30 | Book 2, Ch 4 — Review: Parameter binding and the PowerShell pipeline | **Built** |
| 31 | Book 2, Ch 5 — Scripting language: A crash course | **Built** |
| 32 | Book 2, Ch 6 — The many forms of scripting (and which to choose) | **Built** |
| 33 | Book 2, Ch 7 — Scripts and security | **Built** |

## Phase 4 — Expert
*Book 2, Parts 2–4, chapters 8–27*

| # | Chapter | Status |
|---|---|---|
| 34 | Ch 8 — Always design first | **Built** |
| 35 | Ch 9 — Avoiding bugs: Start with a command | **Built** |
| 36 | Ch 10 — Building a basic function and script module | **Built** |
| 37 | Ch 11 — Getting started with advanced functions | **Built** |
| 38 | Ch 12 — Objects: The best kind of output | **Built** |
| 39 | Ch 13 — Using all the streams | **Built** |
| 40 | Ch 14 — Simple help: Making a comment | **Built** |
| 41 | Ch 15 — Errors and how to deal with them | **Built** |
| 42 | Ch 16 — Filling out a manifest | **Built** |
| 43 | Ch 17 — Changing your brain when it comes to scripting | **Built** |
| 44 | Ch 18 — Professional-grade scripting | **Built** |
| 45 | Ch 19 — An introduction to source control with Git | **Built** |
| 46 | Ch 20 — Pestering your script | **Built** |
| 47 | Ch 21 — Signing your script | **Built** |
| 48 | Ch 22 — Publishing your script | **Built** |
| 49 | Ch 23 — Squashing bugs | **Built** |
| 50 | Ch 24 — Enhancing script output presentation | **Built** |
| 51 | Ch 25 — Wrapping up the .NET Framework | **Built** |
| 52 | Ch 26 — Storing data, not in Excel! | **Built** |
| 53 | Ch 27 — Never the end | **Built** |

## Status

The entire curriculum is built and interactive: Phase 1 (Beginner, Ch 2–8), Phase 2 (Intermediate, Ch 9–19 plus the capstone), Phase 3 (Advanced, Book 1 Ch 20–27 + Book 2 Ch 2–7), and Phase 4 (Expert, Book 2 Ch 8–27). 52 scored lessons total, plus the capstone and the reference appendix, chained start to finish from Beginner 1 through the final Expert synthesis lesson.

## Phase exams

Each phase ends with an optional exam: 10 questions randomly drawn from a larger pool built out of that phase's own lessons, same type-the-command format as everything else, no multiple choice. Exams don't gate anything, they're available any time from the hub and retaking one draws a fresh random set. Your best score per exam is what's remembered (localStorage, this browser only), and 70% or better counts as a pass.

## Suggested pace

One lesson per sitting. Redo any lesson where the score wasn't clean before moving on, the scoring exists to tell you what to revisit, not just to gamify it. Once you've cleared a phase, the exam is a good gut-check before moving on, though nothing stops you from skipping straight ahead.
