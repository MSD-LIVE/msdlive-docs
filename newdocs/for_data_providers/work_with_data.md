# Work with Data in Notebooks


Once you've loaded your dataset in your example notebooks, create visualizations and analyses that demonstrate your data's value and structure.

## What to Include in Your Notebooks

Your example notebooks should help users understand:

- **Data structure:** What variables/columns are available
- **Data quality:** Any known issues or limitations
- **Common use cases:** Typical analyses users might perform
- **Best practices:** How to work efficiently with your specific dataset

## Example Analyses

Create visualizations and summaries appropriate to your data:

=== "Python"

	```python
	import pandas as pd
	import seaborn as sns
	import matplotlib.pyplot as plt

	# Show data structure
	print("Dataset shape:", df.shape)
	print("\nColumn names and types:")
	print(df.dtypes)
	print("\nFirst few rows:")
	display(df.head())

	# Create visualizations
	sns.scatterplot(data=df, x='column1', y='column2')
	plt.title('Example Visualization')
	plt.show()

	# Summary statistics
	print("\nSummary statistics:")
	print(df.describe())
	```

=== "R"

	```r
	library(tidyverse)

	# Show data structure
	cat("Dataset dimensions:", paste(dim(dt), collapse=' x '), "\n")
	cat("\nColumn names and types:\n")
	str(dt)
	cat("\nFirst few rows:\n")
	print(head(dt))

	# Create visualizations
	ggplot(dt, aes(x=column1, y=column2)) +
	  geom_point() +
	  labs(title='Example Visualization')

	# Summary statistics
	cat("\nSummary statistics:\n")
	summary(dt)
	```

=== "Julia"

	```julia
	using DataFrames, Plots, Statistics

	# Show data structure
	println("Dataset size: $(size(df))")
	println("\nColumn names and types:")
	println(describe(df))
	println("\nFirst few rows:")
	first(df, 5)

	# Create visualizations
	scatter(df.column1, df.column2, title="Example Visualization")

	# Summary statistics
	println("\nSummary statistics:")
	describe(df, :mean, :std, :min, :max)
	```

## Best Practices for Example Notebooks

- **Start simple:** Begin with basic data exploration before complex analyses
- **Add comments:** Explain what each code block does
- **Show outputs:** Include cell outputs in your notebooks so users can see expected results
- **Handle errors:** Include examples of common pitfalls and how to avoid them
- **Document workflow:** Use markdown cells to explain the analysis workflow

## README Documentation

Update your README.md to:

- List all notebooks and what each one demonstrates
- Explain the order users should run notebooks (if applicable)
- Document any prerequisites or setup requirements
- Include links to relevant documentation or papers
