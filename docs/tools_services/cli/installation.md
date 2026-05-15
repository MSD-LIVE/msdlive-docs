---
include_from_chatbot: false
---

# Installing the CLI

## Prerequisites

- **Python** — Python 3 must be installed on your computer. See [Installing Python](https://pyguides.dev/tutorials/installing-python) for instructions.
- **Virtual environment (recommended)** — It is recommended to install the CLI inside a virtual environment to avoid conflicts with other packages. See [Create a Virtual Environment Using venv](https://www.geeksforgeeks.org/python/create-virtual-environment-using-venv-python/) for instructions.

## Install

If installing `msdlive-cli` for the first time, run:

```
pip install --index-url https://msd-live.github.io/msdlive-cli-distro/simple/ --extra-index-url https://pypi.org/simple msdlive-cli
```

## Upgrade

If upgrading to a new version of `msdlive-cli`, run:

```
pip install --upgrade --index-url https://msd-live.github.io/msdlive-cli-distro/simple/ --extra-index-url https://pypi.org/simple msdlive-cli
```

> **Note:** If you get an error that pip is not found, try replacing **pip** with **python3 -m pip**
