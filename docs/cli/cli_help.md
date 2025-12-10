# The MSD-LIVE Command-line Interface (CLI)

Instead of uploading or downloading files through the MSD-LIVE web application, you can use the **MSD-LIVE Command Line Interface (CLI)** to upload or download files from a computer terminal.

The CLI does not require a web browser and provides better performance, making it recommended for files that are:

- **Large** (in size or quantity)
- **Remote** (reside on another computer without a web browser)

!!! warning Important


    **Python Required.** The MSD-LIVE CLI requires Python 3.8 or higher. If you get a "command not found” error when trying to run pip, then you must install Python (or use Conda if you're familiar with it). Click here to [download the Python Installer](https://www.python.org/downloads/).

    **Virtual Environment Recommended.** If you encounter dependency conflicts when installing, we recommend using a Python virtual environment such as venv or conda. Click here for [more information on using a virtual environment](venv.md).

    **Working Behind a Proxy Server.** If your organization uses a firewall or VPN with a web proxy, you will need to set certain environment variables in order to install and run the CLI. Click here to [learn how to run the CLI with a proxy](proxy_run_cli.md).

    **Contact Us.** If you run into any problems installing or using the CLI, please contact us at [info@msdlive.org](mailto:info@msdlive.org).

