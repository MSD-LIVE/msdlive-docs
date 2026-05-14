# Working with Notebooks

This guide covers the fundamentals of setting up and working in your notebook environment, including importing packages and accessing datasets.

## Importing Packages

Your notebook environment comes with many common data science libraries pre-installed. Start by importing the packages you need:

### Python

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
```

### Julia

For Julia users, use the `using` statement:

```julia
using DataFrames
using Plots
using StatsPlots
```

### R

For R users, use the `library()` function:

```r
library(tidyverse)
library(ggplot2)
```

Refer to the language-specific documentation for detailed examples and additional libraries available in your environment.

## Accessing Your Data

Dataset files are automatically available in your notebook environment via the `DATA_DIR` environment variable.

- `DATA_DIR` is the **preferred way** to access dataset files
- It points to the mounted dataset location in your environment
- Avoid hardcoding paths like `/data`, as they may change

### Python

```python
import os
from pathlib import Path

data_dir = Path(os.environ["DATA_DIR"])
print("DATA_DIR:", data_dir)

# List files
for p in data_dir.iterdir():
    print("-", p.name)

# Load a CSV file (if present)
csvs = sorted(data_dir.glob("*.csv"))
if csvs:
    df = pd.read_csv(csvs[0])
    df.head()
```

### Julia

```julia
data_dir = ENV["DATA_DIR"]
println("DATA_DIR = ", data_dir)

# Load data files
df = CSV.read(joinpath(data_dir, "your_data.csv"), DataFrame)
```

### R

```r
data_dir <- Sys.getenv("DATA_DIR")
print(paste("DATA_DIR =", data_dir))

# Load data files
df <- read.csv(file.path(data_dir, "your_data.csv"))
```

## Accessing Multiple Datasets

You can access multiple datasets from within your notebook environment. The `OTHER_DATASETS_DIR` environment variable points to all public datasets with file exploration enabled. You can access another dataset by its Record ID:

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

This allows you to combine data from multiple datasets in your analysis.

## Next Steps

Once you've imported packages and loaded your data, you're ready to:
- Visualize and explore your data
- Create workflows for subsetting data in space and time
- Develop analysis pipelines specific to your research questions

For more guidance on data exploration and analysis workflows, see the tutorials and articles in the learning resources section.
