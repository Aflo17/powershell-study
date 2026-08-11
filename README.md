<<<<<<< HEAD
# PowerShell Proficiency Path

Interactive, scenario-based PowerShell lessons built from *Learn PowerShell in a Month of Lunches, 4th Edition* and *Learn PowerShell Scripting in a Month of Lunches, 2nd Edition*. No build tools, no server, no dependencies — plain HTML, CSS, and JavaScript.

See [curriculum.md](curriculum.md) for the full 4-phase, chapter-by-chapter map (Beginner, Intermediate, Advanced, Expert).

## Use it locally

Clone or download this folder, then just open `index.html` in a browser. Every lesson works fully offline.

```
git clone <your-repo-url>
cd powershell-lab
open index.html        # macOS
start index.html        # Windows
```

## Host it on GitHub Pages (free, works from any device)

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch."
4. Pick the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub gives you a URL like `https://<your-username>.github.io/<repo-name>/` within a minute or two. That's your always-available study link, bookmark it on any device.

No further setup needed, GitHub Pages serves static files directly, and this site is nothing but static files.

## How a lesson works

1. **The request** — a message like something your manager, a ticket, or a teammate would actually send.
2. **You respond in PowerShell** — click hoverable syntax pieces or type your own, building on your answer from the previous step when the task chains together.
3. **Instant check** — wrong-but-plausible commands actually "run" and show their real output before explaining why it falls short.
4. **Breakdown** — every piece of the correct syntax explained, the wrong alternative explained, the ordering explained, a running glossary of core concepts that builds across the lesson.
5. **Score** — points per step based on clean solves vs. hints vs. reveals, so you can see exactly where to redo a lesson.

## Adding a new lesson

Every lesson is one self-contained HTML file in `lessons/`. To add one:

1. Copy `lessons/beginner-01-meet-powershell.html` as a starting template.
2. Update the `<title>`, the `<h1>`, and the `LESSON` object's `request`, `completeMessage`, and `steps` array.
3. Each step needs: `title`, `task`, `chips` (with hover hints), `check` (a function deciding if the typed command is correct), `tokens` (the syntax breakdown), `output` (mock terminal output), `order` (why this step comes here), `notice` (callouts on the output), `distractor` (the tempting wrong cmdlet, why it fails, where it's actually right), and `concepts` (transferable PowerShell knowledge). Optionally add `misses` (simulated output for specific wrong-but-plausible commands) and `prefill`/`continuesFromLabel` if the step should carry forward the previous step's command.
4. Add a row for it in `index.html` under the right phase, linking to your new file.
5. Update `curriculum.md` to mark it built.

The shared engine (`assets/engine.js`) and styling (`assets/styles.css`) don't need to change, they're generic across every lesson.

## Credit

Curriculum structure sourced from the table of contents of both books, used here for personal study reference. The exercises, mock data, and explanations are original.
=======
# powershell-study
interactive study
>>>>>>> 615c38e35bf526a8b48596f7c36a174362160d94
