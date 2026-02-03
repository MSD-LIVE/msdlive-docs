# Upload Your Dataset

The MSD-LIVE CLI allows you to upload files to your dataset from the command line.

## When to Use the CLI

The CLI provides better performance and is recommended for uploading files that are:

- **Large** (in size or quantity)
- **Remote** (reside on another computer without a web browser)

## Upload Command

The msdlive upload command allows you to upload a file or folder to a given dataset. The general syntax is as follows:

```
msdlive upload --dataset-id $YOUR_DATASET_ID --src-dir $PATH_TO_LOCAL_FOLDER
```

## Required Parameters

**--dataset-id $YOUR_DATASET_ID**

Replace $YOUR_DATASET_ID with the dataset id that you get from the MSD-LIVE Data Repository web interface. From your dataset's web page, click the 'Upload files from the command line...' link to get the exact command which includes the dataset id.

**--src-dir $PATH_TO_LOCAL_FOLDER**

The --src-dir parameter specifies the folder you want to upload. Replace $PATH_TO_LOCAL_FOLDER with the path to a folder on your local computer. By default, all the contents of that folder will be uploaded to your dataset. If you only want to upload certain files, use the optional parameter --filter-file.

## Optional Parameters

**--filter-file $PATH_TO_FILE**

If you only want to upload certain files from the source directory, add the --filter-file parameter. Replace $PATH_TO_FILE with the path to a file on your local computer. The filter file contains special syntax describing which files to exclude and which to include. See [Advanced Options](../for_data_users/download_advanced_options.md) for details on the file syntax.

**--quiet**

When you include the --quiet parameter, it suppresses the standard output and only displays error messages. This can be helpful if you want to run the synchronization process silently without being overwhelmed by the detailed progress information.

**--delete**

If you upload the same directory to your dataset more than once, the command will compare files in your dataset with those in your source folder and only upload the new or modified files to reduce the amount of data transferred. By default, files that have been deleted from your source folder will not be deleted in the remote dataset. If the --delete option is specified, then the command also deletes any files from your dataset that no longer exist in your source folder.

## Next Steps

- Add [spatial metadata](spatial_metadata.md) to your dataset
- [Enable notebook exploration](enable_exploration.md) for your dataset
