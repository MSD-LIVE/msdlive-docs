---
include_from_chatbot: true
noteboook_environment: notebook_lab 
---

## Notebook Lab Workspace

Each dataset in MSD-LIVE includes its own **Notebook Lab workspace**, giving you an isolated environment to build notebooks to explore and analyze your data.



## Workspace Structure

Your workspace contains three main areas:

- **`notebooks/`**  
  Pre-populated from the linked GitHub repository. This is where you create and edit your notebook files.

- **`data/`**  
  Linked directly to your dataset’s files. This folder is read-only and reflects your dataset contents.

- **Other files**  
  You can create additional files and directories as needed within your workspace.



## Storage and Quota

- Your workspace (excluding the `data/` folder) has a **50 GB storage limit**
- MSD-LIVE monitors workspace usage
- You will receive an **email notification** if you exceed the quota



## Persistence and Cleanup

Your workspace is designed for **active work, not long-term storage**.

- Files in `notebooks/` are **not automatically saved permanently**
- To persist notebook changes:
     - Submit a **Pull Request** to the linked GitHub repository

Any files that are not persisted will be:

- **Automatically deleted after 7 days**
- This includes:
    - Notebook changes not submitted via Pull Request  
    - Temporary files and intermediate outputs  



> ### Best Practices
> 
> - Save important work by submitting Pull Requests regularly  
> - Avoid using the workspace for long-term file storage  
> - Keep large intermediate files to a minimum to stay within quota  



## Summary

- One workspace per dataset  
- `notebooks/` → your working notebooks  
- `data/` → your dataset (read-only)  
- 50 GB quota (excluding data)  
- Uncommitted work is deleted after 7 days  
