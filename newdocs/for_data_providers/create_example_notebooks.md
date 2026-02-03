# Create Example Notebooks

After your data has been uploaded to your MSD-LIVE dataset and the notebook GitHub repository has been linked, you can create example notebooks for your users.

## Watch a Video Tutorial

<div>
  <iframe width="560" height="315"
      src="https://youtube.com/embed/sImLLAIGmhk"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

## Two Options for Creating Notebooks

!!! tip
    Most authors should use **Notebook Lab** unless they already maintain notebooks locally.

### Option 1: Use Notebook Lab (Recommended)

- Access our specialized authoring environment by clicking "Launch Notebook Lab" from your dataset in MSD-LIVE
- Your dataset's data will be automatically mounted and accessible
- Built-in GitHub integration allows you to create pull requests directly from the Jupyter Notebook environment
- No need to download/upload files manually

See [Use Notebook Lab](use_notebook_lab.md) for more information.

### Option 2: Upload Notebooks Directly

- Create notebooks locally or in your preferred environment
- Upload them directly to your GitHub repository

## Creating a New Notebook

After logging in to Notebook Lab, right-click in the file explorer panel and select **"New Notebook"**.

![New Notebook Menu Item](../assets/dataset_notebooks/newnotebookmenuitem.png)
![New Notebook Dialog](../assets/dataset_notebooks/newnotebookdialog.png)

- Choose the **notebooks** folder for dataset-specific notebooks
- Optionally check **"Create notebook with starter code and dataset guidance"** to pre-fill your notebook with examples and environment tips

## Building Your Notebook

Once you've created a notebook:

1. [Install any dependencies needed](install_dependencies.md)
2. [Load and access your dataset](load_data.md)
3. [Work with the data](work_with_data.md) to create visualizations and examples
4. Update the README to document your notebook

## Best Practices

- Include a comprehensive README.md explaining how to use the notebooks
- Start with a data overview notebook that shows the structure and contents of your dataset
- Provide examples for common analysis tasks
- Document dependencies in the requirements.txt file
- Test your notebooks before publishing to ensure they work correctly

## Submitting Your Notebooks

After you have completed your notebooks and updated the README.md file, commit changes back to the repository via a GitHub pull request (PR):

1. CTRL-click to select all the files you have changed
2. Click the pull request (PR) button to submit your changes
3. Review and merge the PR on GitHub

![PR Button 2](../assets/dataset_notebooks/pr2.png)
