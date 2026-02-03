# MSD-LIVE Docs (mkdocs)

A lightweight local workflow for previewing the MSD-LIVE documentation site built with MkDocs and the Material theme.

## Prerequisites

- Python 3.8+ (you have Python 3.12 available locally)
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

3. Run the development server (--livereload is required for WSL otherwise changes to files only show up if you restart the serve command):

```bash
mkdocs serve --livereload
```

4. Open the site in your browser:

```text
http://127.0.0.1:8000/
```

## Troubleshooting

- If the server doesn't reflect changes, stop and restart `mkdocs serve`.

## Useful Links

- Project docs configuration: `mkdocs.yml`
- Docs folder: `docs/`


Dev notes to sort out later:

# Production docs site
https://msdlive-docs.readthedocs.io/


To test running with sphinx build with:
```bash
sphinx-build -b html docs docs/_build/lhtm
```

and run with
```bash
sphinx-autobuild docs docs/_build/html
```



Prefer mkdocs over sphinx because if we want to load the md files in our react landing page app, the sphinx pages will have sphinx only
tags (like for the nav and TOC) where mkdocs all nav is defined in the yml. OR see if sphinx has better support for headleads rendering of 
the built html

TODO for embedding in landing page:

- 
- identify what tags are for mkdocs only

Note:
no longer will customize embedded video player as that was implemented in landing page app


building html to embed in iframe on landing page:
```
mkdocs build -f mkdocs.embed.yml -d site-embed --clean

```