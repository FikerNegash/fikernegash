# Personal website

Static site for GitHub Pages. No build step.

## Files
- `index.html`, `agenda.html`, `research.html` — the three pages. The CV tab links straight to `cv.pdf`.
- `cv.html` — source of the CV. Edit this, then re-print it to `cv.pdf` (see below).
- `style.css` — layout, colours, light and dark themes. `theme.js` — the dark-mode toggle (remembers the choice in the browser).
- `fonts/` — STIX Two Text (SIL Open Font License), a Times design, bundled so the site and the PDF use the same font offline.
- `profile_pic.jpg` — the home-page photo.

## Publish on GitHub Pages
1. Create a repository named `<your-username>.github.io` on GitHub.
2. Copy everything in this folder (including the hidden `.nojekyll`) into the repository and push to the `main` branch.
3. On GitHub, open Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. The site appears at `https://<your-username>.github.io/` after a minute or two.

## Re-print the CV
Open `cv.html` in Chrome, press Ctrl+P, choose "Save as PDF", paper size Letter, margins Default, and untick "Headers and footers". Or from PowerShell, inside this folder:

```
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --allow-file-access-from-files --no-pdf-header-footer --print-to-pdf="$PWD\cv.pdf" "file:///$PWD\cv.html"
```
