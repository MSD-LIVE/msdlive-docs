# Launch the Notebook Lab Environment

Notebook Lab is MSD-LIVE's cloud-based environment for creating and managing example notebooks for your dataset. You can write, test, and share code without installing anything locally, and your dataset files are automatically available.


!!! warning "Before you start:"
 
    - Your dataset files must already be uploaded to MSD-LIVE
    - File exploration must be enabled for your dataset — see [Enable Data Exploration](enable_exploration.md)
    - Your notebook repository must be linked to the dataset — see [Set Up a Notebook Repository](setup_notebook_repository.md)
    - You should have basic familiarity with [Jupyter notebooks](https://docs.jupyter.org/en/latest/) 

## What Notebook Lab Provides

- **No local setup required** — A fully configured Jupyter server launches in the cloud automatically
- **Pre-mounted dataset files** — Your dataset files are immediately accessible in the notebook environment
- **Built-in GitHub integration** — Create pull requests directly from the notebook environment to save and version your work
- **Instant productivity** — Start writing and executing code as soon as the environment loads

## How to Launch Notebook Lab

1. Log in to the [MSD-LIVE Data Repository](https://data.msdlive.org)
2. Navigate to your dataset (draft or published) with File Exploration enabled
3. Click **Launch Notebook Lab**
4. Log in with your MSD-LIVE credentials

Notebook Lab will open in a new window with your dataset files already mounted and ready to use.

You can launch Notebook Lab from a published or draft dataset landing page.

![Launch Notebook Lab Button from Dataset Landing Page](../assets/dataset_notebooks/launchfromlanding.png)

!!! warning
     Notebook Lab sessions are limited to **3 hours**. Be sure to save your work frequently.

<!-- ## Tips for Using Notebook Lab

- **Use GitHub integration** — Push changes and create pull requests from the notebook interface
- **Organize notebooks** — Keep example notebooks in the `notebooks/` folder and community contributions in `community_notebooks/`
- **Test before sharing** — Run and validate notebooks thoroughly before creating pull requests -->

See [Create Example Notebooks](create_example_notebooks.md) for detailed instructions on notebook development and the pull request workflow.

## Video Walkthrough
Watch this video for a quick overview of the full workflow:
<div>
  <iframe width="560" height="315"
      src="https://youtube.com/embed/00Rm65PTsn8"
      frameborder="0" allowfullscreen>
  </iframe>
</div>
