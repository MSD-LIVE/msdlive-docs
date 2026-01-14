# Providing Pre-Packaged Notebooks

The second component of MSD-LIVE's dataset notebooks feature is the ability to provide pre-packaged code written by the dataset author. See [Exploring Datasets via Jupyter Notebooks](/dataset_notebooks/overview) for an overview of related dataset notebook features.



## Why Provide Notebooks

Dataset authors can provide ready-to-run Jupyter notebooks that help downstream users quickly explore, visualize, and understand the data.

Providing pre-packaged notebooks is optional. If you enable file exploration but do not include notebooks, downstream users can still launch blank Jupyter Notebooks to write their own analysis, visualization, or subsetting routines.

Common examples include:
- Quick-look visualization notebooks
- Data structure and variable overview notebooks
- Example analysis or subsetting workflows


### Video Overview

<div>
  <iframe width="560" height="315"
      src="https://youtube.com/embed/sImLLAIGmhk"
      frameborder="0" allowfullscreen>
  </iframe>
</div>


## Requirements
- Ensure you have a draft or published dataset in MSD-LIVE with the following:
    - Data uploaded
    - File exploration enabled

- Familiarity with Jupyter Notebooks and the programming language you plan to use is essential.


## Set Up a Notebook Repository

MSD-LIVE provides an automated workflow to help you set up a GitHub repository for your dataset's notebooks. To set up your repo, you have two options:

![Setup Notebook Repository](../assets/dataset_notebooks/reposetup.png)

### Option 1: Automatically Create a Repository (Recommended)

1. Click the "Setup Repository" button in the File Exploration section

2. In the modal that opens, select "Create a new repository for me (Recommended)"

3. If this is your first time, you'll be prompted to authorize MSD-LIVE to access your GitHub account:

    - Click "Connect with GitHub"
    - Visit the GitHub authorization URL that appears
    - Enter the provided authorization code
    - Once authorized, click "Next" to proceed

4. Select the owner (typically a project in GitHub) and enter a name for your new repository

5. Click "Create Repository"

6. Your new repository will be created automatically with example notebooks and the URL will be added to your record

### Option 2: Link an Existing Repository

1. Click the "Setup Repository" button in the File Exploration section

2. Select "I have an existing repository"

3. Enter the URL of your existing GitHub repository

4. Click "Add Repository"

### Recommended Repository Structure and Template

Whether you create a new repository or use an existing one, we recommend using our <a href="https://github.com/MSD-LIVE/template-dataset-jupyter-notebook" target="_blank" rel="noopener noreferrer">notebook repository template</a> as a reference for structure and example files.


## Create Notebooks

After your data has been uploaded to your MSD-LIVE dataset and the notebook GitHub repository has been linked, you have two options for creating notebooks.

!!! tip
    Most authors should use **Notebook Lab** unless they already maintain notebooks locally.


### Option 1: Upload Notebooks Directly

- Create notebooks locally or in your preferred environment

- Upload them directly to your GitHub repository

### Option 2: Use the Notebook Lab (Recommended)

- Access our specialized authoring environment by clicking "Launch Notebook Lab" from your dataset in MSD-LIVE. See this page for more information on how to use the Notebook Lab.

- Your dataset's data will be automatically mounted and accessible

- Built-in GitHub integration allows you to create pull requests directly from the Jupyter Notebook environment

- No need to download/upload files manually

Follow [these instructions](/dataset_notebooks/notebook_lab/) to create your dataset notebooks using the Notebook Lab environment.

## Best Practices
- Include a comprehensive README.md explaining how to use the notebooks

- Start with a data overview notebook that shows the structure and contents of your dataset

- Provide examples for common analysis tasks

- Document dependencies in the requirements.txt file
- Test your notebooks before publishing to ensure they work correctly