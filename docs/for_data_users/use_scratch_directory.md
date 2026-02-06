# Use the Scratch Directory

The scratch directory is a temporary space for downloading large files you've created or processed during analysis in your Jupyter notebook. The scratch directory also enables you to download files remotely when a web browser isn't available.

## What is the scratch directory?

The scratch directory is:

- A symbolic link inside your Jupyter home directory

- Mounted using mount-s3 (i.e., cloud-backed)

- A temporary space: Files are automatically deleted after 1 day

- Used to download files you've created/subsetted during analysis in a notebook

!!! warning "Limitations"

    Because it's backed by S3:

    - Renaming files is not supported
    - Symbolic links cannot be created inside the scratch directory
    - Write speeds may be slower than writing to your local file system

## When should you use the scratch directory?

Use the scratch directory if:

- You've processed or subsetted large data in your notebook

- You want to download that data outside of the Jupyter web interface (e.g., via MSD-LIVE's CLI)

- You want your data on a machine without a web browser or you're dealing with many files or large files

You can still right-click → Download in the Jupyter interface for smaller downloads, but the scratch directory is recommended for heavier lifting.

## How to copy output files to the scratch directory

To copy your processed/subsetted files to the scratch dir from within your notebook do the following:

1. Open the File Browser (left sidebar)

2. Select the files and/or folders you want to copy
    - Use Shift+Click or Ctrl+Click (Cmd+Click on Mac) to select multiple items

3. Click the blue cloud button in the toolbar at the top of the file browser

4. A notification will appear letting you know the copy job has started

5. Once complete, you'll receive a second notification confirming the copy finished

Here's a video of copying files to a scratch directory:

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/PQ4aF16puak"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

!!! note "Important Note"

    Using the "Copy to Scratch Dir" button in the file explorer is the preferred and supported way to copy files into your scratch directory. While it's technically possible to copy files using code inside notebooks, this is not recommended due to underlying S3 limitations.
