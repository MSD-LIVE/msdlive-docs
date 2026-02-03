# Download Data

The MSD-LIVE CLI provides easy methods to help you download files directly from datasets.

## When to Use the CLI

The CLI does not require a web browser and provides better performance, making it recommended for files that are:

- **Large** (in size or quantity)
- **Remote** (reside on another computer without a web browser)

## Quick Start

Watch this video for a full walkthrough of installing and using the CLI:

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/A7xMkEvV-Ms"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

## Download from a Dataset

To download one or more files from a specific dataset, use:

```
msdlive download --dataset-id $YOUR_DATASET_ID --output-dir $YOUR_LOCAL_DIRECTORY
```

**Required Parameters:**

**--dataset-id $YOUR_DATASET_ID**

Replace $YOUR_DATASET_ID with the dataset ID, which you can find on the MSD-LIVE Data Repository web interface. From your dataset's page, click **"Download files from the command line..."** to get a pre-filled command with the correct dataset ID.

**--output-dir $YOUR_LOCAL_DIRECTORY**

Replace $YOUR_LOCAL_DIRECTORY with the path to a folder on your local computer. All files from the dataset will be downloaded to this location.

## Optional Parameters

**--filter-file $PATH_TO_FILE**

Download only specific files by providing a filter file. This file contains rules for including or excluding files. See the [Advanced Options](../for_data_users/download_advanced_options.md) section for syntax details.

**--quiet**

Suppresses normal output and only shows errors—useful for silent or scripted operations.

## Next Steps

- Learn more about [Advanced Download Options](../for_data_users/download_advanced_options.md)
- Set up the [Command Line Tools](../tools_services/cli_installation.md)
