# Running the CLI Behind a Proxy

If you get certificate errors when trying to install or run the CLI, it is likely that your organization is using a web proxy. In order to work with a web proxy, you need to tell your applications that all traffic is being routed through a proxy. Different applications have different ways to communicate this information. Below we show you the steps needed to install the CLI and run commands.

## Installing the CLI Behind a Proxy
From your activated virtual environment shell, run this command:

```
pip install --proxy $PROXY_URL https://github.com/MSD-LIVE/msdlive-cli-distro/raw/dev/dist/msdlive_cli-1.1.1-py3-none-any.whl
```

## Running an MSD-LIVE CLI command Behind a Proxy
From your activated virtual environment shell, run this command:

### Windows
```
set HTTPS_PROXY=YOUR_PROXY_URL_GOES_HERE
```

### Linux/macOS
```
export HTTPS_PROXY=YOUR_PROXY_URL_GOES_HERE
```

- Replace YOUR_PROXY_URL_GOES_HERE with the proxy URL for your organization. Contact your system administrator for this value.
- Once this environment variable is set, then you can safely run any msdlive command.