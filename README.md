# MSD-LIVE Docs (mkdocs)

A lightweight local workflow for previewing the MSD-LIVE documentation site built with MkDocs and the Carbon theme. The built site is deployed to GitHub Pages and also loaded inside the MSD-LIVE React landing page via an iframe (`DocsEmbed` component).

## Prerequisites

- Python 3.8+ (Python 3.12 recommended)
- pip
- Recommended: create and use a virtual environment

## Quick Start (development)

1. Create and activate a virtual environment (optional but recommended):

```bash
python -m venv .venv
source .venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the development server (`--livereload` is required for WSL — otherwise file changes only appear after restarting):

```bash
mkdocs serve --livereload
```

4. Open the site in your browser:

```text
http://127.0.0.1:8000/
```

## Building for Production

A single build produces the full site, which is used both for direct browsing and for embedding in the React landing page:

```bash
mkdocs build --strict
```

Then serve the built site locally to preview the GitHub Pages layout:

```bash
python -m http.server 8001 --directory site
```

Deployment to GitHub Pages is handled automatically by `.github/workflows/deploy-docs.yml` on pushes to `main`.

## Project Structure

- `mkdocs.yml` — MkDocs site configuration (nav, theme, plugins, extensions)
- `docs/` — Markdown source files
- `docs/styles/carbon-customizations.css` — All custom styling (Carbon theme overrides, typography, person-card grid, etc.)
- `docs/overrides/` — Custom theme template overrides
- `docs/javascripts/carbon-nav-scroll-fix.js` — Nav scroll behavior fix
- `.github/workflows/deploy-docs.yml` — GitHub Pages deployment workflow

## Embedding in the React Landing Page

The docs site is loaded inside the landing page app via an iframe using the `DocsEmbed` component. It points at the deployed site directly (e.g. `https://msd-live.github.io/msdlive-docs/platform_community/about/`) — there is no separate headless build. This means any styling or nav changes in `mkdocs.yml` / `carbon-customizations.css` are reflected in both contexts automatically.

## Troubleshooting

- If the dev server doesn't reflect changes, stop and restart `mkdocs serve --livereload`.
- If styles look wrong in the embedded iframe but correct standalone (or vice-versa), confirm the class names in your markdown match those defined in `docs/styles/carbon-customizations.css`.

## Useful Links

- Production docs site: https://msd-live.github.io/msdlive-docs/
- MkDocs config: `mkdocs.yml`
- Custom styles: `docs/styles/carbon-customizations.css`

---

## Historical Notes

**Why MkDocs over Sphinx?**
Sphinx-generated HTML embeds Sphinx-specific tags for nav and TOC, making headless embedding harder. MkDocs defines navigation entirely in `mkdocs.yml`, which makes the rendered content cleaner and easier to embed in an iframe.

**Video player customization:**
No longer handled here — implemented in the landing page app instead.