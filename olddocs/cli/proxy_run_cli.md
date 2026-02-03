# Running the CLI Behind a Proxy

If you get certificate errors when trying to install or run the CLI, it is likely that your organization is using a web proxy. In order to work with a web proxy, you need to tell your applications that all traffic is being routed through a proxy. Different applications have different ways to communicate this information. Below we show you the steps needed to install the CLI and run commands.


**Installing the CLI Behind a Proxy**

From your activated virtual environment shell, run this command:

```
pip install --proxy $PROXY_URL https://github.com/MSD-LIVE/msdlive-cli-distro/raw/prod/dist/msdlive_cli-1.2-py3-none-any.whl
```


**Running an MSD-LIVE CLI command Behind a Proxy**

From your activated virtual environment shell, run this command:

<cds-tabs trigger-content="Select an item" value="windows">
  <cds-tab id="windows-tab" target="panel-windows" value="windows">Windows</cds-tab>
  <cds-tab id="linux-tab" target="panel-linux" value="linux">Linux/MacOS</cds-tab>
</cds-tabs>

<div>
    <div id="panel-windows" role="tabpanel" aria-labelledby="windows-tab" hidden>
        <pre><code class="language-bash">set HTTPS_PROXY=YOUR_PROXY_URL_GOES_HERE</code></pre>
    </div>

    <div id="panel-linux" role="tabpanel" aria-labelledby="linux-tab" hidden>
        <pre><code class="language-bash">export HTTPS_PROXY=YOUR_PROXY_URL_GOES_HERE</code></pre>
    </div>
</div>

- Replace YOUR_PROXY_URL_GOES_HERE with the proxy URL for your organization. Contact your system administrator for this value.
- Once this environment variable is set, then you can safely run any msdlive command.