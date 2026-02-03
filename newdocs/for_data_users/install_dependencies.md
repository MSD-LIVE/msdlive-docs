# Install Dependencies

In Jupyter Notebooks, you can install and use external packages directly from within a code cell—no need to leave the notebook! Here's how you can do it for Python, R, and Julia notebooks.

=== "Python"

    Install the package (run this in a Python cell):

    ```python
    !pip install polars --quiet
    ```

    Then import the package:

    ```python
    import polars as pl
    import os
    from pathlib import Path
    import pandas as pd
    import seaborn as sns
    import matplotlib.pyplot as plt
    ```

=== "R"

    Install the package (run this in an R cell):

    ```r
    install.packages(c('tidyverse','data.table'), repos='https://cloud.r-project.org')
    ```

    Then load the package:

    ```r
    library(tidyverse)
    library(data.table)
    packageVersion('tidyverse'); packageVersion('data.table')
    ```

=== "Julia"

    Install the package (run this in a Julia cell):

    ```julia
    import Pkg;
    Pkg.add([
        "DataFrames",
        "CSV",
        "Plots"
    ]);
    ```

    Then load and use the package:

    ```julia
    using DataFrames, CSV, Plots
    @info "DataFrames version" DataFrames.VERSION
    ```
