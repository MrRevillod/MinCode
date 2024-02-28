#!/bin/bash

# Authorization for APC extension
sudo chown -R $(whoami) $(which code)

# Copy the custom config files into vscode folder
cp ./src/* ~/.config/Code/User/
