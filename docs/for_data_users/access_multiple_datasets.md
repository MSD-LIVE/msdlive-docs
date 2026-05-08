# Accessing Dataset Data

Dataset files are automatically available in your notebook environment via the `DATA_DIR` environment variable.

### Python example

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

### Notes

- `DATA_DIR` is the **preferred way** to access dataset files  
- It points to the mounted dataset location in your environment  
- Avoid hardcoding paths like `/data`, as they may change  



## Access Multiple Datasets

You can access multiple datasets from within your Jupyter notebook environment.

The `PUBLIC_DATA_DIR` environment variable points to all public datasets with file exploration enabled. You can access another dataset by its Record ID:

```python
import os
from pathlib import Path

# PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
public_dir = Path(os.environ['PUBLIC_DATA_DIR'])
print("PUBLIC_DATA_DIR =", public_dir)

# Access another dataset by its Record ID
other_dataset_id = "6yawb-zyx60"
other_data_path = public_dir / other_dataset_id

print(f"Files available in dataset {other_dataset_id}:")
for f in other_data_path.iterdir():
    print(" -", f.name)
```

This allows you to combine data from multiple datasets in your analysis.
