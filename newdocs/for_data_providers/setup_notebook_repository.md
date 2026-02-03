# Set Up a Notebook Repository

MSD-LIVE provides an automated workflow to help you set up a GitHub repository for your dataset's notebooks. 

## Requirements

- Ensure you have a draft or published dataset in MSD-LIVE with the following:
    - Data uploaded
    - File exploration enabled
- Familiarity with Jupyter Notebooks and the programming language you plan to use is essential

## Setup Options

You have two options for setting up your repository:

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

## Recommended Repository Structure

Whether you create a new repository or use an existing one, we recommend using our <a href="https://github.com/MSD-LIVE/template-dataset-jupyter-notebook" target="_blank" rel="noopener noreferrer">notebook repository template</a> as a reference for structure and example files.

## Next Steps

After setting up your repository:

- [Use Notebook Lab](use_notebook_lab.md) to create notebooks
- [Create example notebooks](create_example_notebooks.md) for your users
