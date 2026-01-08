# Using a Virtual Environment

A Python virtual environment is a self-contained directory that contains a specific Python installation along with its own set of libraries and dependencies. It allows you to create an isolated environment where you can install packages and run Python programs without affecting the global Python installation on your system. **Using a virtual environment avoids conflicts between different Python projects on your system.**

## Creating a Virtual Environment

Python provides a built-in module called venv to create and manage virtual environments. The steps to create a virtual environment depend upon the operating system you are using:

=== "Windows"

    Open the command prompt (Note: our instructions are for "Command Prompt" not "Windows PowerShell" as PowerShell might need additional configurations).

    Enter the following command:

    ```
    python -m venv %HOMEPATH%\venvs\msdlive
    ```

=== "Unix-based systems (Linux/macOS)"

    Open a terminal.

    Enter the following command:

    ```
    python3 -m venv ~/venvs/msdlive
    ```

## Activating a Virtual Environment
Once you have created a virtual environment, you need to activate it in order to use it. The steps depend upon the operating system you are using:

=== "Windows"

    Open the command prompt.

    Enter the following command:
    ```
    %HOMEPATH%\venvs\msdlive\Scripts\activate
    ```

=== "Unix-based systems (Linux/macOS)"

    Open a terminal.

    Enter the following command:
    
    ```
    source ~/venvs/msdlive/bin/activate
    ```

    After executing the appropriate command, you should see that the virtual environment is activated. The prompt in your command prompt or terminal will change to indicate that you are now working within the virtual environment. You can then install packages or run Python scripts within this activated venv.

## Deactivating a Virtual Environment
Once you have finished working in your virtual environment, you can deactivate it to restore your system's default Python environment:

Open a terminal (Linux/macOS) or command prompt (Windows)

Enter the following command:
```
deactivate
```

After executing the command, the virtual environment will be deactivated. The prompt will no longer display the venv name, indicating that you have returned to your system's default Python environment.