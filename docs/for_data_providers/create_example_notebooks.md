# Create Example Notebooks

Learn how to create and maintain example notebooks for your dataset.

## Creating New Notebooks

For detailed instructions on creating new notebooks, follow these steps:

1. Launch the Notebook Lab from your dataset's landing page
2. Right-click in the file explorer and select **New Notebook**
3. Choose the notebook folder and kernel language
4. Optionally check "Create notebook with starter code and dataset guidance"

## Editing and Persisting Notebooks

- Create and edit notebooks inside the `notebooks` folder
- Files persist across Notebook Lab sessions for the same dataset
- Sessions expire after 3 hours, so save often

## Creating a Pull Request

- Click the **Pull Request** button in the Notebook Lab interface
- On first use, authorize MSD-LIVE to access your GitHub repository
- MSD-LIVE creates a pull request containing your new or updated notebooks

## Importing Packages

Start by importing the necessary libraries in an empty cell. For example using Python:

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
```

See the [Working with Data](../for_data_users/working_with_data.md) page for detailed examples on how to import libraries in Python, Julia, and R.

## Accessing Data

Use the **"DATA_DIR"** environment variable to access your dataset files:

```python
import os
from pathlib import Path

data_dir = Path(os.environ['DATA_DIR'])
```

Now you're ready to create example notebooks for your dataset!
