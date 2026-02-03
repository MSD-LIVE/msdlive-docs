# Download Published Datasets

The MSD-LIVE CLI allows you to download files from published datasets using the command line.

## Download Command

To download one or more files from a specific dataset, use:

```
msdlive download --dataset-id $YOUR_DATASET_ID --output-dir $YOUR_LOCAL_DIRECTORY
```

## Required Parameters

**--dataset-id $YOUR_DATASET_ID**

Replace $YOUR_DATASET_ID with the dataset ID, which you can find on the MSD-LIVE Data Repository web interface. From your dataset's page, click **"Download files from the command line..."** to get a pre-filled command with the correct dataset ID.

**--output-dir $YOUR_LOCAL_DIRECTORY**

Replace $YOUR_LOCAL_DIRECTORY with the path to a folder on your local computer. All files from the dataset will be downloaded to this location.

## Optional Parameters

**--filter-file $PATH_TO_FILE**

Download only specific files by providing a filter file. This file contains rules for including or excluding files. See the [Advanced Options](download_advanced_options.md) section for syntax details.

**--quiet**

Suppresses normal output and only shows errors—useful for silent or scripted operations.

## Next Steps

- Learn about [filtering files and advanced options](download_advanced_options.md)
- Download [results from your notebook analysis](download_notebook_results.md)
