# AGENTS.md

Static personal portfolio site (pure HTML/CSS/JS), deployed on Netlify
(`https://blog-mansidiego.netlify.app/`). No build step, no `package.json`,
no tests, no linter. Open `index.html` directly in a browser to preview.

## Working directory / git
- The git repo root is `MansiDiego/` (NOT the parent `Blog Profesional/`).
  All source files — `index.html`, `static.css`, `codigo.js` — live there.
- All paths in `index.html` and `codigo.js` are relative to `MansiDiego/`,
  so the site must be served/opened from within that folder.

## Commands
- No `npm run ...` exists. To preview: open `MansiDiego/index.html` in a browser.
- Git: repo remote is `origin = https://github.com/MansiDiego/MansiDiego`.
  Push `main` to `origin`; Netlify redeploys on push to `main` (auto).
  When local `main` is behind remote, run `git pull --rebase origin main`
  first and resolve any conflict in `codigo.js` manually before committing.
  Avoid interactive `vim` during rebase/commit by setting `GIT_EDITOR=true`.

## Key conventions
- External deps are loaded via CDN (Font Awesome, Google Fonts, Material
  Symbols). No local `node_modules` or installs are required.
- Age is computed dynamically: the birth date `20/04/2004` lives in
  `codigo.js` (inside `DOMContentLoaded`). Do not edit the hardcoded `21`
  in `index.html`; it is overwritten at runtime by `getElementById('age')`.
- Dark-mode preference is persisted in `localStorage` under key `theme`.

## Development practices
When refactoring or adding code, follow the existing style: keep syntax clean and
consistent, and add descriptive comments in the same tone already used in
`codigo.js` (concise Spanish comments that explain "why"/intent, not "what").
Favor readability over cleverness; match surrounding patterns rather than
introducing new frameworks or abstractions.

## Stack
- Frontend: vanilla HTML5, CSS3, ES6+ JavaScript (no frameworks, no bundlers).
- Styling: `static.css` with CSS custom properties for light/dark (cyberpunk vs
  minimal) themes.
- Scripts: `codigo.js` — dark-mode, dynamic age, carousel + modal logic.
- Icons & fonts (via CDN): Font Awesome 6, Google Fonts (Poppins, JetBrains Mono),
  Material Symbols. No `node_modules` or package installation required.
- Hosting: deployed as a static site on Netlify; source on GitHub.

## File ownership
- `index.html` — markup; sections: about, projects, certifications (carousel + modal), contact.
- `static.css` — all styling; CSS variables drive light/dark (cyberpunk vs minimal) themes.
- `codigo.js` — dark-mode toggle + dynamic age calc + certifications carousel/modal logic.
- `docs/CvPortfolio.pdf` — downloadable CV.
- `img/` — profile photo, tech icons, certification thumbnails, modal images.
