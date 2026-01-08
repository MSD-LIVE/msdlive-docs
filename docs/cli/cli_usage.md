# Using the CLI

The MSD-LIVE CLI provides easy methods to help you upload or download files directly to or from a dataset.

Watch this video for a full walkthrough of installing and using the CLI:

<div>
  <iframe width="560" height="315"
      src="https://www.youtube.com/embed/A7xMkEvV-Ms"
      frameborder="0" allowfullscreen>
  </iframe>
</div>

## Getting Help
If you can't remember the command syntax, use the built-in help to get the list of commands that are available.

```
msdlive --help
```

To get a description of a specific command and its required and optional parameters, run the following:

```
msdlive $COMMAND_NAME --help
```

Example:
```
msdlive download --help
```

---

## Logging In
Before you can upload any files to your draft dataset or download files from a protected dataset, you must login first:

```
msdlive login
```

Once logged in, your credentials will last for two days. If you want to continue using the CLI after that time, you will need to log in again.

---

## Downloading Files
The msdlive download command allows you to download files either from a published dataset or from your scratch directory. The general syntax depends on the source.

### Download from a Dataset

To download one or more files from a specific dataset, use:

```
msdlive download --dataset-id $YOUR_DATASET_ID --output-dir $YOUR_LOCAL_DIRECTORY
```

**Required Parameters:**

- **--dataset-id $YOUR_DATASET_ID**

Replace $YOUR_DATASET_ID with the dataset ID, which you can find on the MSD-LIVE Data Repository web interface. From your dataset’s page, click **"Download files from the command line..."** to get a pre-filled command with the correct dataset ID.

- **--output-dir $YOUR_LOCAL_DIRECTORY**

Replace $YOUR_LOCAL_DIRECTORY with the path to a folder on your local computer. All files from the dataset will be downloaded to this location.

### Download from Your Scratch Directory

To download files you've staged in your personal scratch directory (e.g., during interactive data exploration), use:

```
msdlive download --scratch --output-dir $YOUR_LOCAL_DIRECTORY
```

**Required Parameter:**

- **--output-dir $YOUR_LOCAL_DIRECTORY**

Replace $YOUR_LOCAL_DIRECTORY with the folder path where you want the scratch files saved.

**Optional Parameters (for both modes):**

- **--filter-file $PATH_TO_FILE**

Download only specific files by providing a filter file. This file contains rules for including or excluding files. See the [Filtering Files Section](https://local.msdlive.org:3000/cli-help#filter-files) for syntax details.

- **--quiet**

Suppresses normal output and only shows errors—useful for silent or scripted operations.

---

## Uploading Files
The msdlive upload command allows you to upload a file or folder to a given dataset. The general syntax is as follows:

```
msdlive upload --dataset-id $YOUR_DATASET_ID --src-dir $PATH_TO_LOCAL_FOLDER
```

**Required Parameters:**

- **--dataset-id $YOUR_DATASET_ID**

Replace $YOUR_DATASET_ID with the dataset id that you get from the MSD-LIVE Data Repository web interface. From your dataset's web page, click the 'Upload files from the command line...' link to get the exact command which includes the dataset id.

- **--src-dir $PATH_TO_LOCAL_FOLDER**

  The --src-dir parameter specifies the folder you want to upload. Replace $PATH_TO_LOCAL_FOLDER with the path to a folder on your local computer. By default, all the contents of that folder will be uploaded to your dataset. If you only want to upload certain files, use the optional parameter --filter-file. See the Filtering Files Section for details on the file syntax.

**Optional Parameters:**

- **--filter-file $PATH_TO_FILE**

If you only want to upload certain files from the source directory, add the --filter-file parameter. Replace $PATH_TO_FILE with the path to a file on your local computer. The filter file contains special syntax describing which files to exclude and which to include. See the Filtering Files Section for details on the file syntax.

--quiet

When you include the --quiet parameter, it suppresses the standard output and only displays error messages. This can be helpful if you want to run the synchronization process silently without being overwhelmed by the detailed progress information.

--delete

If you upload the same directory to your dataset more than once, the command will compare files in your dataset with those in your source folder and only upload the new or modified files to reduce the amount of data transferred. By default, files that have been deleted from your source folder will not be deleted in the remote dataset. If the --delete option is specified, then the command also deletes any files from your dataset that no longer exist in your source folder.

---

## Filtering Files

By default, all files are included in an msdlive upload or download. If you want to exclude or include only certain files, you will need to create a filter file and then pass the path to that file on the command line using the --filter-file parameter.

The filter file is a [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) file that has two sections, one for files to exclude and one for exceptions to the exclude rules, as shown in this example:

```
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

Each section contains a list of patterns that identify a subset of files or folders. The patterns can include wildcards and other special characters to match multiple files or directories. Here are some important aspects of the file format:

1. **Blank lines and comments:** Blank lines and lines starting with a hash symbol (#) are ignored and treated as comments.

2. **Pattern matching:** Patterns can use wildcards to match multiple files or directories. The most commonly used wildcards are:

  - *: Matches everything

  - ?: Matches any single character

  - [sequence]: Matches any character in sequence

  - [!sequence]: Matches any character not in sequence

3. Directory matching:To specify an entire directory, add the relative path to the directory followed a trailing slash and an asterisk (/*). For example, **mydirectory/** will indicate the entire "mydirectory" directory.

4. **Negation:** Any file patterns listed in the except section will reverse the general exclusions from the exclude section. This is useful if you want to exclude a directory but include a specific file or files within it.

5. **Relative paths:** Patterns in the file are relative to the location of the source directory.

**Examples**
```
# Exclude all .vscode, .history, and .DS_Store folders and their children
exclude:
  - '*.vscode/*'
  - '*.history/*'
  - '*.DS_Store/*'
```
```
# Exclude all *.log and *.env files
exclude:
  - '*.log'
  - '*.env'
```
```
# Only include the README.md file
exclude:
  - '*'
except:
  - 'README.md' 
```
```
# Exclude all files that start with the letter a, b, c, or d
exclude:
  - '[abcd]*'
```

---

# Logging Out
Your msdlive credentials will automatically expire after two days of inactivity, so there is no need to log out, but if you wish to expire the credentials earlier, you can run the logout command:

```
msdlive logout
```