# Use Notebook Lab

This guide covers how to use MSD-LIVE's cloud-based Notebook Lab to create and maintain example notebooks for your dataset.

![Dataset Notebooks](../assets/dataset_notebooks/datasetnotebookstep2-custom.png)

## Video Overview

Watch this short demo to see how authors use the Notebook Lab environment:

<div>
  <iframe width="560" height="315"
      src="https://youtube.com/embed/00Rm65PTsn8"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

## What Notebook Lab Provides

- **No local setup required:** A fully configured Jupyter server is launched automatically in the cloud—no Python or Jupyter installation needed
- **Pre-mounted dataset files:** Your dataset files are immediately available in the notebook environment
- **Instant productivity:** Start writing and executing code as soon as the environment loads
- **Built-in GitHub workflow:** Create pull requests directly from the Notebook Lab and share notebooks for review

## Launching Notebook Lab

1. Log in to MSD-LIVE's data repository
2. Navigate to your draft or published dataset with File Exploration enabled
3. Click **Launch Notebook Lab**
4. Log in using your MSD-LIVE credentials

You can launch the Notebook Lab from a published or draft dataset's landing page:

![Launch from Landing](../assets/dataset_notebooks/launchfromlanding.png)

Or from the File Exploration section once your GitHub repository is linked:

![Launch from Draft](../assets/dataset_notebooks/launchfromdraft.png)

!!! important
    Notebook Lab sessions are limited to **3 hours**. Be sure to save your work frequently.

## Working in Notebook Lab

### Creating New Notebooks

For detailed instructions on creating new notebooks, see [Create Example Notebooks](create_example_notebooks.md).

### Editing and Persisting Notebooks

- Create and edit notebooks inside the `notebooks` folder
- Files persist across Notebook Lab sessions for the same dataset
- Sessions expire after 3 hours, so save often

### Creating a Pull Request

- Click the **Pull Request** button in the Notebook Lab interface
- On first use, authorize MSD-LIVE to access your GitHub repository
- MSD-LIVE creates a pull request containing your new or updated notebooks

![PR Button](../assets/dataset_notebooks/prbutton.png)

## GitHub Authorization

- Authorization is required the first time you use the pull request feature
- This is a one-time setup that allows MSD-LIVE to push changes on your behalf
- You retain full control—review and merge pull requests directly on GitHub

## Storage Management

For information on managing your Notebook Lab storage, see [Manage Storage](save_manage_storage.md).
