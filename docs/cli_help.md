# The MSD-LIVE Command-line Interface (CLI)

Instead of uploading or downloading files through the MSD-LIVE web application, you can use the **MSD-LIVE Command Line Interface (CLI)** to upload or download files from a computer terminal.

The CLI does not require a web browser and provides better performance, making it recommended for files that are:

- **Large** (in size or quantity)
- **Remote** (reside on another computer without a web browser)

---

<div style="background: #FFF3CD; border-left: 6px solid #FFEE32; padding: 16px; margin: 20px 0;">
  <h3 style="margin-top: 0;">⚠️ Important</h3>

  <p><strong>Python Required</strong><br>
  The MSD-LIVE CLI requires <strong>Python 3.8 or higher</strong>.<br>
  If you get a <em>“command not found”</em> error when trying to run <code>pip</code>, then you must install Python (or use Conda if you're familiar with it).<br>
  <a href="https://www.python.org/downloads/">Download the Python Installer</a></p>

  <p><strong>Virtual Environment Recommended</strong></br>
  <p>If you encounter dependency conflicts when installing, we recommend using a <strong>Python virtual environment</strong> such as <code>venv</code> or <code>conda</code>.</p>
  <p><a href="https://msdlive.org/help/resources/quick-guides/using-virtual-environments">More information on virtual environments</a></p>

  <p><strong>Working Behind a Proxy Server</strong><br>
  If your organization uses a firewall or VPN with a web proxy, you may need to set proxy-related environment variables.</p>
  <p><a href="https://msdlive.org/help/resources/quick-guides/cli-proxy">Learn how to run the CLI with a proxy</a></p>

  <p><strong>Need Help?</strong><br>
  If you run into any problems installing or using the CLI, contact us at: <a href="mailto:info@msdlive.org">info@msdlive.org</a></p>
</div>


<details>
  <summary><strong>Using a Virtual Environment</strong></summary>

<p>A Python virtual environment is a self-contained directory that contains a specific Python installation along with its own set of libraries and dependencies. It allows you to create an isolated environment where you can install packages and run Python programs without affecting the global Python installation on your system. <strong>Using a virtual environment avoids conflicts between different Python projects on your system.</strong><p><br>

## Creating a Virtual Environment

Python provides a built-in module called `venv` to create and manage virtual environments. The steps to create a virtual environment depend upon the operating system you are using:

### Windows

Open the Command Prompt (note: these instructions are for *Command Prompt*, not PowerShell).

Run:

</details>