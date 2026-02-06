# Create Notebooks

Follow these steps to create custom notebooks for exploring your data.

## Creating Notebooks

After logging in to your notebook environment, right-click in the file explorer panel and select **"New Notebook"**.

![New Notebook Menu Item](../assets/dataset_notebooks/newnotebookmenuitem.png)

![New Notebook Dialog](../assets/dataset_notebooks/newnotebookdialog.png)

- Optionally check "Create notebook with starter code and dataset guidance" to pre-fill your notebook with examples and environment tips.

## Importing Packages

In your new notebook, start by importing the necessary libraries. For example using Python:

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
```

Click the documentation pages for detailed examples on how to import libraries in Python, Julia, and R.

## Accessing Data

Use the **"DATA_DIR"** environment variable to access the location where a copy of your data is stored.

```python
import os
from pathlib import Path

data_dir = Path(os.environ['DATA_DIR'])
print('DATA_DIR =', data_dir)
```

Now you're ready to write custom code to visualize/analyze the data or to create workflows for subsetting the data in space and time.
