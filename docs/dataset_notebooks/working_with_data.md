# Working with Data

Learn how to install packages, load data, and access multiple datasets in your Jupyter notebook environment.

## Installing and using dependencies in a notebook

In Jupyter Notebooks, you can install and use external packages directly from within a code cell - no need to leave the notebook! Here's how you can do it for Python, R, and Julia notebooks.

=== "Python"

    1. Install the package (run this in a Python cell):

        ```
        !pip install polars --quiet
        ```

    2. Import necessary packages:

        ```python
        import polars as pl
        import os
        from pathlib import Path
        import pandas as pd
        import seaborn as sns
        import matplotlib.pyplot as plt
        ```

    3. Inspect Dataset Directory

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

    4. Polars Conversion and Summary

        ```python
        if 'df' in locals() and isinstance(df, pd.DataFrame) and df is not None:
          pl_df = pl.from_pandas(df)
          print('Converted pandas DataFrame to polars shape =', pl_df.shape)
          print(pl_df.head())
          print('\nColumn means:')
          print(pl_df.select(pl.all().mean()))
        ```
        Converts the pandas DataFrame (df) to a Polars DataFrame (pl_df), displays the first rows, and computes simple column means using Polars expressions.

    5. [Access another dataset](#accessing-multiple-datasets-from-any-notebook-server) by its Record ID

        ```python
        import os
        from pathlib import Path

        # PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
        public_dir = Path(os.environ['PUBLIC_DATA_DIR'])
        print("PUBLIC_DATA_DIR =", public_dir)

        # Access another dataset by its Record ID
        # we can access another dataset's data by using its Record ID as the path under public_datasets
        other_dataset_id = "6yawb-zyx60"  
        other_data_path = public_dir / other_dataset_id

        print(f"Files available in dataset {other_dataset_id}:")
        for f in other_data_path.iterdir():
            print(" -", f.name)
        ```


=== "R"

    1. Install the package (run this in an R Cell)

      ```r
      install.packages(c('tidyverse','data.table'), repos='https://cloud.r-project.org')
      ```

    2. Load the package

      ```r
      library(tidyverse)
      library(data.table)
      packageVersion('tidyverse'); packageVersion('data.table')
      ```

      This will create a scatter plot of weight vs. miles per gallon from the built-in mtcars dataset

    3. Inspect Dataset Directory

      ```r
      data_dir <- Sys.getenv('DATA_DIR')
      if (data_dir == '' || !dir.exists(data_dir)) {
        message('DATA_DIR not set or missing. Falling back to /data')
        data_dir <- '/data'
      }
      cat('Using data directory:', data_dir, '\n')

      cat('\nListing via data_dir:\n')
      print(list.files(data_dir))
      cat('\nListing via /data:\n')
      print(if (dir.exists('/data')) list.files('/data') else '(/data not found)')

      # Example: read first CSV if available (pattern fixed: use "[.]csv$" to avoid escape issues)
      csvs <- list.files(data_dir, pattern='[.]csv$', full.names=TRUE, ignore.case=TRUE)
      if (length(csvs) > 0) {
        cat('\nFound CSV files:\n'); print(basename(csvs))
        first <- csvs[1]
        dt <- data.table::fread(first)
        cat('\nLoaded', basename(first), 'dim =', paste(dim(dt), collapse='x'), '\n')
        print(head(dt))
      } else {
        cat('\nNo CSV files found matching *.csv in', data_dir, '\n')
      }
      ```

    4. [Access another dataset](#accessing-multiple-datasets-from-any-notebook-server) by its Record ID

      ```r
      # PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
      public_dir <- Sys.getenv('PUBLIC_DATA_DIR')
      cat("PUBLIC_DATA_DIR =", public_dir, "\n")

      # Access another dataset by its Record ID
      # we can access another dataset's data by using its Record ID as the path under public_datasets
      other_dataset_id <- "6yawb-zyx60"  
      other_data_path <- file.path(public_dir, other_dataset_id)

      cat("Files available in dataset", other_dataset_id, ":\n")
      print(list.files(other_data_path))
      ```


=== "Julia"

    1. Install the package (run these in a Julia cell):

      ```julia
      import Pkg;
      Pkg.add([
          "DataFrames",
          "CSV",
          "Plots"
      ]);
      ```

    2. Load and use the package data manipulation and plotting:

      ```julia
      using DataFrames, CSV, Plots
      @info "DataFrames version" DataFrames.VERSION
      ```

    3. Inspect Dataset Directory

      ```julia
      data_dir = ENV["DATA_DIR"]
      println("DATA_DIR = $(data_dir)")
      println("\nListing via DATA_DIR:")
      for f in readdir(data_dir)
          println(" - ", f)
      end
      println("\nListing via /data:")
      for f in readdir("/data")
          println(" - ", f)
      end

      csvs = filter(f -> endswith(lowercase(f), ".csv"), readdir(data_dir; join=true))
      if !isempty(csvs)
          df = CSV.read(first(csvs), DataFrame)
          println("\nLoaded 
      (size(df))")
          first(df, 5)
      else
          println("\nNo CSV files found.")
      end
      ```
    Use ENV["DATA_DIR"] (preferred) and /data to list files. Attempts to read a CSV if present.

    4. Acccess another dataset by its Record ID

      ```julia
      # PUBLIC_DATA_DIR points to all public datasets with file exploration enabled
      public_dir = ENV["PUBLIC_DATA_DIR"]
      println("PUBLIC_DATA_DIR = $(public_dir)")

      # Access another dataset by its Record ID
      # we can access another dataset's data by using its Record ID as the path under public_datasets
      other_dataset_id = "6yawb-zyx60"  
      other_data_path = joinpath(public_dir, other_dataset_id)

      println("Files available in dataset $other_dataset_id:")
      for f in readdir(other_data_path)
          println(" - ", f)
      end
      ```

!!! note
    
    - You typically only need to install a package once per environment

    - If your environment resets or changes, you may need to reinstall

    - Some restricted environments may prevent installation of certain packages

---

## Accessing Multiple Datasets from Any Notebook Server

MSD-LIVE supports exploring multiple datasets from the same Jupyter notebook server using the public_datasets feature.

Key points:

1. From any dataset's Jupyter notebook server, you can access all published, public datasets that have enabled file exploration via the /public_datasets directory. 

    ![public_datasets](../assets/dataset_notebooks/public_datasets_in_jupyter.png)

2. Only datasets with file exploration enabled are available here. 

    ![public_datasets](../assets/dataset_notebooks/record_id_in_dir.png)

3. The Record ID can be found on the dataset's public landing page, in the details section.

    ![Record ID](../assets/dataset_notebooks/record_id.png)

4. A symbolic link named public_datasets is included in your Jupyter home directory (similar to /data) pointing to /public_datasets.

5. A PUBLIC_DATA_DIR environment variable is now available in your Jupyter server, similar to DATA_DIR.
