# Access Multiple Datasets

MSD-LIVE supports exploring multiple datasets from the same Jupyter notebook server using the public_datasets feature.

## How It Works

1. From any dataset's Jupyter notebook server, you can access all published, public datasets that have enabled file exploration via the `/public_datasets` directory

    ![public_datasets](../assets/dataset_notebooks/public_datasets_in_jupyter.png)

2. Only datasets with file exploration enabled are available here

    ![public_datasets](../assets/dataset_notebooks/record_id_in_dir.png)

3. The Record ID can be found on the dataset's public landing page, in the details section

    ![Record ID](../assets/dataset_notebooks/record_id.png)

4. A symbolic link named `public_datasets` is included in your Jupyter home directory (similar to `/data`) pointing to `/public_datasets`

5. A `PUBLIC_DATA_DIR` environment variable is now available in your Jupyter server, similar to `DATA_DIR`

## Code Examples

=== "Python"

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

=== "R"

    ```r
    # PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
    public_dir <- Sys.getenv('PUBLIC_DATA_DIR')
    cat("PUBLIC_DATA_DIR =", public_dir, "\n")

    # Access another dataset by its Record ID
    other_dataset_id <- "6yawb-zyx60"  
    other_data_path <- file.path(public_dir, other_dataset_id)

    cat("Files available in dataset", other_dataset_id, ":\n")
    print(list.files(other_data_path))
    ```

=== "Julia"

    ```julia
    # PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
    public_dir = ENV["PUBLIC_DATA_DIR"]
    println("PUBLIC_DATA_DIR = $(public_dir)")

    # Access another dataset by its Record ID
    other_dataset_id = "6yawb-zyx60"  
    other_data_path = joinpath(public_dir, other_dataset_id)

    println("Files available in dataset $other_dataset_id:")
    for f in readdir(other_data_path)
        println(" - ", f)
    end
    ```
