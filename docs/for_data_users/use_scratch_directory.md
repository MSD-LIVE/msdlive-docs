# Using the Scratch Directory

Each notebook environment includes a **scratch directory** for temporary storage.

Location:

    ~/scratch/


## What it is

- A temporary workspace backed by cloud storage  
- Intended for intermediate and output files  
- Files are **automatically deleted after ~24 hours**


## When to use it

Use scratch if:

- You are working with **large files**  
- You need to download data outside the notebook UI  
- You are running long or multi-step workflows  


!!! warning "Limitations"
    - Renaming files is not supported
    - Symbolic links cannot be created inside the scratch directory
    - Write speeds may be slower than writing to your local file system


## Scratch Directory Walkthrough
Watch this video for a walkthrough of copying files to the scratch directory and downloading them.

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/PQ4aF16puak"
      frameborder="0" allowfullscreen>
  </iframe>
</div>


## How to copy output files to the scratch directory

To copy your processed/subsetted files to the scratch dir from within your notebook do the following:

1. Open the File Browser (left sidebar)

2. Select the files and/or folders you want to copy
    - Use Shift+Click or Ctrl+Click (Cmd+Click on Mac) to select multiple items

3. Click the blue cloud button in the toolbar at the top of the file browser

4. A notification will appear letting you know the copy job has started

5. Once complete, you'll receive a second notification confirming the copy finished

> **Important:** 
    Using the "Copy to Scratch Dir" button in the file explorer is the preferred and supported way to copy files into your scratch directory. While it's technically possible to copy files using code inside notebooks, this is not recommended due to underlying S3 limitations.






 