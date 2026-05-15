---
include_from_chatbot: true
noteboook_environment: dataset_notebook, notebook_lab
---

# Using the Scratch Directory

Each notebook environment includes a **scratch directory** for temporary storage.

## When to use it

Use the scratch directory when it is impractical to download subset output directly from the notebook file browser in your web browser.

This is typically the case when one or more of the following are true:

- The subset contains **many files**, making one-by-one browser downloads tedious
- The subset includes a **folder hierarchy** that you want to preserve
- The total download size is **too large** for reliable browser-based downloading

In this situation, scratch acts as a staging area:

1. Copy subset files to scratch using the blue cloud button in the notebook file browser
2. Download the staged files with the msdlive CLI from your local or remote machine


## What it is

- A temporary, cloud-backed staging area for files generated in your notebook session
- Primarily used to stage subsetted dataset files for CLI download
- Files are **automatically deleted after ~24 hours**


!!! warning "Limitations"
    - Renaming files is not supported
    - Symbolic links cannot be created inside the scratch directory
    - Write speeds may be slower than writing to your local file system


## How to copy output files to the scratch directory

To copy your processed/subsetted files to the scratch directory from within your notebook do the following:

1. Open the File Browser (left sidebar)

2. Select the files and/or folders you want to copy
    - Use Shift+Click or Ctrl+Click (Cmd+Click on Mac) to select multiple items

3. Click the blue cloud button in the toolbar at the top of the file browser

4. A notification will appear letting you know the copy job has started

5. Once complete, you'll receive a second notification confirming the copy finished

> **Important:** 
    Using the "Copy to Scratch Dir" button in the file explorer is the preferred and supported way to copy files into your scratch directory. While it's technically possible to copy files using code inside notebooks, this is not recommended due to underlying S3 limitations.


## How to download files from the scratch directory

For step-by-step instructions on downloading files from scratch with the msdlive CLI, see [Scratch directory usage in the msdlive CLI docs](../../tools_services/cli/usage/#scratch-directory).


## Video Walkthrough

Watch this video for a walkthrough of copying files to the scratch directory and downloading them.

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/PQ4aF16puak"
      frameborder="0" allowfullscreen>
  </iframe>
</div>






 