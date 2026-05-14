# Create Example Notebooks

Example notebooks (pre-packaged code) help users understand how to work with your dataset. You can create them either in Notebook Lab or in your local development environment.

## Option A: Create Notebooks Locally

If you prefer to build notebooks in your own environment, you can use your normal Git workflow:

1. Clone your [linked GitHub notebook repository](setup_notebook_repository.md)
2. Create or edit notebooks in your preferred local editor or IDE 
3. Test notebooks with your dataset
4. Commit and push your changes to GitHub

Once merged, the notebooks are available to users via **Explore the Data**.

## Option B: Create Notebooks in Notebook Lab (Recommended)

Use [Notebook Lab](launch_notebook_environment.md) to create and test notebooks directly with your mounted data.

### Automatic Repository Setup

- The first time Notebook Lab launches for a dataset, MSD-LIVE automatically clones the GitHub repository you configured in [Set Up a Notebook Repository](setup_notebook_repository.md)
- The repository is cloned into your home directory under the `notebooks/` folder
- Files in this environment persist across Notebook Lab sessions for the same dataset

### Create and Edit Notebooks

1. [Launch Notebook Lab](launch_notebook_environment.md) from your dataset landing page
2. Open the `notebooks/` folder in the file explorer
3. Right-click and select **New Notebook**
4. Choose the kernel language (Python, R, or Julia)
5. Optionally check "Create notebook with starter code and dataset guidance" for a template
6. Test your notebook code against your mounted dataset

![New notebook](../assets/dataset_notebooks/newnotebookmenuitem.png)

### Accessing Your Data and Importing Packages

Your dataset is automatically mounted — no downloads needed. For code examples covering data access and package imports in Python, R, and Julia, see [Working with Notebooks](../learning_resources/working-with-notebooks.md).


## Best Practices

- **Write clear explanations** — Use markdown cells to document what each section does
- **Test thoroughly** — Run notebooks against real data before publishing
- **Keep notebooks focused** — One notebook per analysis or workflow
- **Include examples** — Show users how to subset, filter, and transform data
- **Save frequently** — If using Notebook Lab, save often (3-hour session limit)
- **Document dependencies** — List required packages or external data
