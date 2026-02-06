# Dataset Exploration Overview

This page provides an overview of how the dataset notebook feature works from the perspective of a dataset author.

![Overview of Dataset Notebooks](../assets/dataset_notebooks/overview-bordered.png)

Watch this video for an overview of the workflow for using MSD-LIVE's dataset notebooks feature:

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/7DOLFdx5eNA"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

---

## 1. Dataset Authors: Enabling File Exploration

As a dataset author, you can choose to enable interactive Jupyter Notebook file exploration when creating or editing a record in the MSD-LIVE data repository. There are a few things you should keep in mind when enabling this feature:

- Upload raw files in their original format (e.g., `.csv`, `.netcdf`)
- File types should be readable in Jupyter Notebooks
- No zipped archives
- Select **"Yes"** to the question: *"Would you like to provide end users the ability to visualize, explore, or subset this dataset via Jupyter Notebooks?"*

---

## 2. Dataset Authors: Providing Pre-Packaged Code

Dataset authors have the option to provide pre-packaged code designed to assist data users in exploring the data. For example, data visualization notebooks used to generate quick-look plots of the data. This is an optional step. If you enable file exploration for your data but do not provide pre-packaged code, data users will still have the option to open blank Jupyter Notebooks to write their own analysis, visualization, or subsetting routines.

---

## 3. Data Users: Exploring the Data

Data users can explore data in MSD-LIVE by browsing the data repository. If a dataset in the repository supports interactive dataset notebooks, they'll see an "Explore the Data" button on the dataset's landing page.
