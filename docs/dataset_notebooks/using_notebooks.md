# Explore Data in Notebooks

The fourth component of MSD-LIVE's dataset notebooks feature is the ability to run code from within Jupyter Notebooks against data mounted from a dataset. See [Exploring Datasets via Jupyter Notebooks](index.md) for an overview of related dataset notebook features.

Watch this video for a full walkthrough of exploring datasets via Jupyter Notebooks.

<div>
  <iframe width="560" height="315"
      src="https://youtube.com/embed/TGFe0bD4qe8"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

If a dataset owner has enabled file exploring on the dataset you will see an "Explore the data" link on the dataset's landing page. If you do not see this link that means interactive file exploring has not been enabled for the dataset. To start exploring, click this "Explore the data" link:

![Explore Small Data](../assets/dataset_notebooks/exploredatasmall.png)

If the dataset author has provided pre-packaged code you will be automatically directed to a README file explaining how to use the notebooks provided by the dataset author. If no README file is available, you will need to create your own notebook to interact with the data. See the [How to Create Dataset Notebooks](create_notebooks.md) page for more instructions.

## Launching the Environment

- Downstream users should click "Explore the data" to launch the Jupyter Notebook environment.

- If the dataset author linked a GitHub repository, the provided notebooks will be automatically cloned.

- Dataset authors should click "Launch Notebook Lab" to create notebooks associated with the dataset.

- Use your MSD-LIVE account to authenticate.

![Explore Link](../assets/dataset_notebooks/explorelinklandingpage.png)

![Launch from Landing](../assets/dataset_notebooks/launchfromlanding.png)

---

## Using the MSD-LIVE AI Assistant
Once your Jupyter notebook environment opens, you can access the MSD-LIVE AI Assistant from the right sidebar.
This built-in chatbot can help you as you explore and analyze your dataset. It provides:

- MSD-LIVE feature guidance — how to use the scratch directory, reference DATA_DIR and PUBLIC_DATA_DIR, and work within the environment

- JupyterLab help — running cells, managing notebooks, and navigating the interface

- Code assistance — writing Python/R/Julia code to load, inspect, analyze, and visualize your data

- Notebook best practices — organizing your workflow, debugging, and improving notebook quality

You can ask it questions at any time while working with your dataset.

![Chat Bot](../assets/dataset_notebooks/chatbot.png)

---

The key features of using MSD-LIVE's Jupyter Notebooks for data exploration are outlined below. An <a href="https://data.msdlive.org/records/6yawb-zyx60" target="_blank" rel="noopener noreferrer">example dataset with file exploration enabled</a> and its accompanying <a href="https://notebook.msdlive.org/?dataset_id=6yawb-zyx60" target="_blank" rel="noopener noreferrer">notebook environment</a> is also provided so you can see these features in action.

Here are some common help topics:
- [Working with Data](working_with_data.md) — installing dependencies, accessing datasets, and loading data

- [Manage Your Scratch Directory](scratch_directory.md) — using scratch space for large file downloads

- [Download Files via CLI](download_scratch_cli.md) — using the command-line tool to download files

- About contributing notebooks

!!! note

    When exploring data via Jupyter Notebooks in MSD-LIVE, your session is limited to 1 hour

---

## Contributing Back
MSD-LIVE's dataset exploration environment includes a powerful collaboration feature that lets users contribute improvements back to the platform. If you create useful analysis or visualization notebooks, you can submit a GitHub Pull Request (PR) so others can benefit from your work.

### How to Submit a Pull Request
![PR Button](../assets/dataset_notebooks/pr2.png)

When exploring a dataset, you'll see a **Pull Request** button in the JupyterLab toolbar. You can use it to contribute new notebooks or updates to existing ones.

**Where your PR goes**
- If your notebook is in /notebooks (dataset-specific notebooks):
Your PR is sent to the dataset owner for review.

- If your notebook is in /community_notebooks (shared community notebooks):
Your PR is sent to MSD-LIVE administrators for review.

Community Notebooks exist so contributions can still be saved and shared even when a dataset author hasn't linked a GitHub repository.

**How to contribute**
1. Create or modify notebooks in your environment.

2. Select the file(s) to include (CTRL-click for multiple).

3. Click Pull Request.

4. Add a brief description.

5. Submit.

Once approved, your notebook will become available to all future users who explore the dataset. This creates a collaborative ecosystem where the exploration experience continuously improves through community contributions.

### Browsing Source Code Repository

![Repo Button](../assets/dataset_notebooks/repo_button.png)

You'll also see a button that opens the dataset's notebook repository directly on GitHub. This allows you to:

- Browse the source code and history of the exploration notebooks

- View existing issues and discussions

**Note:** Your contributions help improve the dataset exploration experience for the entire research community of downstream users.

**Tip:** Consider contributing when you create useful visualizations, find more efficient analysis methods, or develop notebooks that address common research questions with the dataset.

**Remember**: All contributions are subject to review by the dataset author before being made available to other users.
