# Working with Data

Learn how to install packages, load data, and access multiple datasets in your Jupyter notebook environment.

## Installing and using dependencies in a notebook

In Jupyter Notebooks, you can install and use external packages directly from within a code cell - no need to leave the notebook! Here's how you can do it for Python, R, and Julia notebooks.

### Python

**Install the package (run this in a Python cell)**

```python
!pip install polars --quiet
```

**Import necessary packages**

```python
import polars as pl
import os
from pathlib import Path
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
```

**Inspect Dataset Directory**

```python
data_dir = Path(os.environ['DATA_DIR'])
print('DATA_DIR =', data_dir)

print('\nListing via DATA_DIR:')
for p in data_dir.iterdir():
    print(' -', p.name)

csvs = sorted(data_dir.glob('*.csv'))
df = None
if csvs:
    first = csvs[0]
    print(f"\nAttempting to load {first.name} ...")
    df = pd.read_csv(first)
    
    if df is not None:
        print('Shape =', df.shape)
        display(df.head())
```

**Polars Conversion and Summary**

```python
if 'df' in locals() and isinstance(df, pd.DataFrame) and df is not None:
    pl_df = pl.from_pandas(df)
    print('Converted pandas DataFrame to polars shape =', pl_df.shape)
    print(pl_df.head())
    print('\nColumn means:')
    print(pl_df.select(pl.all().mean()))
```

Converts the pandas DataFrame (df) to a Polars DataFrame (pl_df), displays the first rows, and computes simple column means using Polars expressions.

**Access another dataset by its Record ID**

```python
import os
from pathlib import Path

# OTHER_DATASETS_DIR points to all public datasets with file exploration enabled
public_dir = Path(os.environ['OTHER_DATASETS_DIR'])
print("OTHER_DATASETS_DIR =", public_dir)

# Access another dataset by its Record ID
other_dataset_id = "6yawb-zyx60"
other_data_path = public_dir / other_dataset_id

print(f"Files available in dataset {other_dataset_id}:")
for f in other_data_path.iterdir():
    print(" -", f.name)
```

### R

**Install the package (run this in an R cell)**

```r
install.packages(c('tidyverse','data.table'), repos='https://cloud.r-project.org')
```

**Load the package**

```r
library(tidyverse)
library(data.table)
packageVersion('tidyverse'); packageVersion('data.table')
```

### Julia

See documentation for Julia packages and installation methods.

## Loading and Accessing Data

All dataset files are available in the `/data` directory within your notebook environment. Use the `DATA_DIR` environment variable to reference this location in your code.
