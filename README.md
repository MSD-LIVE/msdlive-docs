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

3. Run the development server:

```bash
mkdocs serve
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