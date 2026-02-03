# Analyze and Visualize Data

Once you've [loaded your data](load_data.md) and [installed any needed dependencies](install_dependencies.md), you can write custom code to analyze and visualize your dataset.

## What You Can Do

- Create visualizations using libraries like matplotlib, seaborn, ggplot2, or Plots.jl
- Perform statistical analyses and data transformations
- Subset data in space and time based on your research needs
- Generate summary statistics and reports
- Create interactive plots and dashboards

## Example Analyses

=== "Python"

    ```python
    import pandas as pd
    import seaborn as sns
    import matplotlib.pyplot as plt

    # Assuming df is your loaded DataFrame
    if 'df' in locals() and isinstance(df, pd.DataFrame):
        # Create a simple visualization
        sns.scatterplot(data=df, x='column1', y='column2')
        plt.title('My Analysis')
        plt.show()
    ```

=== "R"

    ```r
    library(tidyverse)

    # Create a scatter plot
    ggplot(dt, aes(x=column1, y=column2)) +
      geom_point() +
      labs(title='My Analysis')
    ```

=== "Julia"

    ```julia
    using Plots

    # Create a simple plot
    scatter(df.column1, df.column2, title="My Analysis")
    ```

## Saving Results

If you generate processed data or analysis results that you want to download:

1. Save your results to files in your notebook environment
2. Use the [scratch directory](use_scratch_directory.md) for large files
3. Download via the Jupyter interface or [using the CLI](download_notebook_results.md)

## Getting Help

Use the **MSD-LIVE AI Assistant** (right sidebar) for help with:
- Writing analysis code
- Debugging errors
- Choosing appropriate visualization libraries
- Optimizing your workflow
