# Advanced Options

Learn how to filter files and use advanced options when downloading data.

## Filtering Files

By default, all files are included in an msdlive download. If you want to exclude or include only certain files, you will need to create a filter file and then pass the path to that file on the command line using the `--filter-file` parameter.

The filter file is a <a href="https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started" target="_blank" rel="noopener noreferrer">YAML</a> file that has two sections, one for files to exclude and one for exceptions to the exclude rules, as shown in this example:

```yaml
# This is a basic example of a filter-file.yaml

# Provide a list of patterns to exclude.  
exclude:
  - '*'   # Exclude all files

# Provide a list of patterns that are exceptions to the 
# above exclude rules.  
except:
  - '*.txt'  # Except, include all files that end with .txt
```

!!! info "Notes"

    We recommend using an editor such as VSCode that supports YAML file syntax to make creating your filter file easier.

    If no excludes are listed, then all files will be included by default, no matter what is in the except section!

    If no excludes are listed, then the except section will be ignored!

## Pattern Syntax

Each section contains a list of patterns that identify a subset of files or folders. The patterns can include wildcards and other special characters to match multiple files or directories. Here are some important aspects of the file format:

### Blank lines and comments

Blank lines and lines starting with a hash symbol (#) are ignored and treated as comments.

### Pattern matching

Patterns can use wildcards to match multiple files or directories. The most commonly used wildcards are:

- `*`: Matches everything
- `?`: Matches any single character
- `[sequence]`: Matches any character in sequence
- `[!sequence]`: Matches any character not in sequence

### Directory matching

To specify an entire directory, add the relative path to the directory followed a trailing slash and an asterisk (/*). For example, `mydirectory/*` will indicate the entire "mydirectory" directory.

### Negation

Any file patterns listed in the except section will reverse the general exclusions from the exclude section. This is useful if you want to exclude a directory but include a specific file or files within it.

### Relative paths

Patterns in the file are relative to the location of the source directory.

## Examples

Exclude all .vscode, .history, and .DS_Store folders and their children:
```yaml
exclude:
  - '*.vscode/*'
  - '*.history/*'
  - '*.DS_Store/*'
```

Exclude all *.log and *.env files:
```yaml
exclude:
  - '*.log'
  - '*.env'
```

Only include the README.md file:
```yaml
exclude:
  - '*'
except:
  - 'README.md' 
```

Exclude all files that start with the letter a, b, c, or d:
```yaml
exclude:
  - '[abcd]*'
```
