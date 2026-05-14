# About Data Exploration

As part of creating an MSD-LIVE dataset, data providers can enable file exploration for their dataset so users can browse, visualize, and analyze the data in a notebook environment without downloading files.

## What Exploration Includes

When you enable exploration for your dataset:

- **Interactive file browsing** — users can see and preview dataset files in a Jupyter Notebook environment
- **Pre-packaged notebooks** — you can provide example analyses (visualization, subsetting, statistical summaries) that users can run or modify
- **Custom analysis tools** — users can write their own code to explore and transform the data
- **Multiple languages** — choose between Python, R, or Julia for your analysis environment

## The Provider Workflow

Enabling dataset exploration has one required step, and you can optionally provide example notebooks:

1. **Enable file exploration** — Mark your dataset as explorable so users can click **Explore the Data** from the dataset landing page and open their environment
2. **Provide example notebooks** — If you want to share pre-packaged code, create example notebooks and store them in a linked GitHub repository

If you choose not to provide example notebooks, users can still explore your dataset in a blank notebook environment. If you do link a repository, that repository is where your example notebooks live, and the code is included when users open the environment through **Explore the Data**.

**Notebook Lab** is the provider-side environment you use to develop the example notebooks. When users click **Explore the Data** a notebook environment is launched with the dataset mounted and, when available, your linked pre-packaged code included.

## Getting Started

- [Enable Data Exploration](enable_exploration.md) — Configure your dataset for interactive exploration
- [Set Up a Notebook Repository](setup_notebook_repository.md) — Connect GitHub to host your notebooks
- [Create Example Notebooks](create_example_notebooks.md) — Write notebooks that guide users
- [Share Notebooks](share_notebooks.md) — Contribute improvements back to the community

## Video Walkthrough
Watch this video for a quick overview of the full workflow:

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/7DOLFdx5eNA"
      frameborder="0" allowfullscreen>
  </iframe>
</div>
