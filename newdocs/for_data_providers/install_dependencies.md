# Install Dependencies


When creating example notebooks for your dataset, you can install and use external packages directly from within a code cell—no need to leave the notebook!

## Installing Packages in Your Notebooks

Here's how to install packages for Python, R, and Julia notebooks:

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

## Documenting Dependencies

Be sure to document the packages your notebooks require:

- Include package installation steps at the beginning of your notebooks
- Document dependencies in a requirements.txt file (Python) or equivalent for your chosen language
- Test that users can successfully install and use the packages

!!! note
	You typically only need to install a package once per environment. If your environment resets or changes, you may need to reinstall.
