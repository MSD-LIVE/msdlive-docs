# Install the CLI

To install the CLI, run this command from your computer terminal:

```
pip install https://github.com/MSD-LIVE/msdlive-cli-distro/raw/prod/dist/msdlive_cli-1.2-py3-none-any.whl
```

!!! tip

    If you get an error that pip is not found, try replacing **pip install** with **python3 -m pip install**

## Requirements

**Python Required.** The MSD-LIVE CLI requires Python 3.8 or higher. If you get a "command not found" error when trying to run pip, then you must install Python (or use Conda if you're familiar with it). Click here to <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">download the Python Installer</a>.

**Virtual Environment Recommended.** If you encounter dependency conflicts when installing, we recommend using a Python virtual environment such as venv or conda. Click here for [more information on using a virtual environment](cli_virtual_environments.md).

**Working Behind a Proxy Server.** If your organization uses a firewall or VPN with a web proxy, you will need to set certain environment variables in order to install and run the CLI. Click here to [learn how to run the CLI with a proxy](cli_proxy_setup.md).

**Contact Us.** If you run into any problems installing or using the CLI, please contact us at [info@msdlive.org](mailto:info@msdlive.org).
