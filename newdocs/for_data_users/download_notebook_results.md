# Download Notebook Results

After processing or subsetting data in your notebook, you can download files from your scratch directory using the MSD-LIVE CLI.

## Download from Scratch Directory

To download files you've staged in your personal scratch directory (e.g., during interactive data exploration), use:

```
msdlive download --scratch --output-dir $YOUR_LOCAL_DIRECTORY
```

## Required Parameter

**--output-dir $YOUR_LOCAL_DIRECTORY**

Replace $YOUR_LOCAL_DIRECTORY with the folder path where you want the scratch files saved.

## Optional Parameters

**--filter-file $PATH_TO_FILE**

Download only specific files by providing a filter file. This file contains rules for including or excluding files. See the [Advanced Options](download_advanced_options.md) section for syntax details.

**--quiet**

Suppresses normal output and only shows errors—useful for silent or scripted operations.

## Workflow

1. [Create and run analysis in a notebook](create_notebook.md)
2. [Copy results to your scratch directory](use_scratch_directory.md)
3. Download files using the command above
4. Results are available on your local machine

!!! warning "Scratch Directory Cleanup"

    Files in your scratch directory will be automatically deleted after 24 hours. Be sure to download anything you need before then.

## Next Steps

- Learn more about the [scratch directory](use_scratch_directory.md)
- Explore [advanced download options](download_advanced_options.md)
