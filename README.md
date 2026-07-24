# MSD-LIVE Docs (MkDocs)

Documentation site for MSD-LIVE, built with MkDocs and the Carbon theme. Deployed to GitHub Pages in **two forms**:

- **Full docs** at `/` — standalone site with nav, header, search. Linked from the "Help" button in the landing page header.
- **Headless embed** at `/embed/` — same content, chrome stripped, designed to be loaded inside iframes on the MSD-LIVE React landing page via the `DocsEmbed` component.

Both are produced from the same Markdown sources; only the theme configuration and CSS differ.

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

### Previewing the Embed Build Locally

To preview the headless build used by iframes:

```bash
mkdocs serve --livereload -f mkdocs.embed.yml -a 127.0.0.1:8001
```

Then open `http://127.0.0.1:8001/`.

## Building for Production

The two builds produce sibling directories under a single `site/` root:

```bash
# Full docs → site/
mkdocs build --strict

# Headless embed → site/embed/
mkdocs build --strict -f mkdocs.embed.yml -d site/embed
```

Resulting layout:

```
site/
├── index.html                 ← full docs
├── assets/
├── platform_community/
├── ...
└── embed/                     ← headless docs (iframed by landing page)
    ├── index.html
    ├── platform_community/
    └── ...
```

Preview the combined output locally to mirror the GitHub Pages layout:

```bash
python -m http.server 8001 --directory site
```

Visit:
- `http://127.0.0.1:8001/` — full docs
- `http://127.0.0.1:8001/embed/platform_community/about/` — a headless page as it would appear in an iframe

Deployment to GitHub Pages is handled automatically by `.github/workflows/deploy-docs.yml`:
- Pushes to `main` → auto-deploy
- Pushes to any branch → build-only (preview validation)
- Pull requests targeting `main` → build-only
- Manual `workflow_dispatch` from any branch → deploy (for feature-branch testing)

## Project Structure

- `mkdocs.yml` — Main site configuration (nav, theme, plugins, extensions)
- `mkdocs.embed.yml` — Headless configuration. Inherits from `mkdocs.yml` via `INHERIT:` and overrides the theme/CSS to strip nav, header, search, and footer
- `docs/` — Markdown source files (shared between both builds)
- `docs/styles/carbon-customizations.css` — Styling shared by both builds (card grids, layout patches, etc.)
- `docs/styles/embed.css` — Additional styles applied only to the headless embed build (hides Carbon chrome)
- `docs/overrides/` — Custom theme template overrides for the full build
- `docs/overrides/embed/` — Custom theme template overrides for the headless build
- `docs/javascripts/carbon-nav-scroll-fix.js` — Nav scroll behavior fix
- `.github/workflows/deploy-docs.yml` — GitHub Pages deployment workflow (builds both `/` and `/embed/`, publishes as one artifact)

## Embedding in the React Landing Page

The landing page's `DocsEmbed` component loads pages from the **headless build** via iframe:

```
https://msd-live.github.io/msdlive-docs/embed/<path>/
```

Routes like `/about`, `/policies`, and `/computational-resources` map to specific embed pages in `App.tsx`. The header's "Help" button links to the **full** docs site (not the embed) and opens in a new tab.

Because both builds share the same Markdown sources, content changes are reflected in both contexts automatically after deployment. Only styling changes need to consider which build they target:

- Add to `carbon-customizations.css` → affects both.
- Add to `embed.css` → affects only the embed build.
- Change theme templates → put them in `docs/overrides/` (full) or `docs/overrides/embed/` (headless).

## Troubleshooting

- **Dev server doesn't reflect changes** — stop and restart `mkdocs serve --livereload`.
- **Embed page 404s in iframe but full docs page loads** — verify the page is included in `mkdocs.embed.yml`'s effective nav, and that `mkdocs build --strict -f mkdocs.embed.yml` succeeds locally.
- **Embed styles look wrong** — check that `embed.css` is correctly hiding Carbon chrome (`cds-header`, `.md-sidebar--primary`, etc.). Load an embed URL directly in a browser (outside any iframe) to isolate the styling.
- **`DocsEmbed` path mismatch** — the `path` prop in `App.tsx` routes must match the actual URL structure of the embed build (respecting `use_directory_urls`).

## Useful Links

- Production docs: https://msd-live.github.io/msdlive-docs/
- Production embed root: https://msd-live.github.io/msdlive-docs/embed/
- MkDocs full config: `mkdocs.yml`
- MkDocs embed config: `mkdocs.embed.yml`

---

## Historical Notes

**Why MkDocs over Sphinx?**
Sphinx-generated HTML embeds Sphinx-specific tags for nav and TOC, making headless embedding harder. MkDocs defines navigation entirely in `mkdocs.yml`, which makes the rendered content cleaner and easier to embed in an iframe.

**Video player customization:**
No longer handled here — implemented in the landing page app instead.