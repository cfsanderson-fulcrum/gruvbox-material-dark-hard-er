# Contributing

Thanks for contributing to this project!

> **Note**: This is a simplified fork of the original [Gruvbox Material](https://github.com/sainnhe/gruvbox-material-vscode) theme by [sainnhe](https://github.com/sainnhe). This version provides only the Material Dark Hard variant with slightly higher contrast.

## Requirements

Make sure you have the following programs installed:

1. [git](git-scm.com/)
2. [nodejs && npm](https://nodejs.org/en/download/)

## Start

First, clone and set up the project:

```shell
$ git clone https://github.com/cfsanderson-fulcrum/gruvbox-material-dark-hard-er.git
$ cd gruvbox-material-dark-hard-er
$ npm install
$ npm run build
$ npm run package
$ code --install-extension ./gruvbox-material-dark-hard-er-*.vsix
```

Now, use VS Code to open this project and modify the code, then press `F5` to start debugging.

## The theme file

This simplified theme consists of a single JSON file located in `/themes/gruvbox-material-dark-hard-er.json` that defines all the colors.

The theme file is automatically generated from TypeScript source code in `/src/generateSimplifiedTheme.ts`. To modify the theme:

1. Edit the TypeScript source file
2. Run `npm run build:theme` to regenerate the JSON file
3. Test your changes

The theme file contains:
- **Workbench colors**: The VS Code UI elements
- **Syntax highlighting**: Code syntax coloring
- **Semantic highlighting**: Advanced token-based highlighting

For all available workbench colors, see [this documentation](https://code.visualstudio.com/api/references/theme-color).

To inspect current token scopes for syntax highlighting, press `Ctrl+Shift+P` and search for "Inspect Editor Tokens and Scopes".

## Building and Testing

To build and test the theme locally:

```bash
# Install dependencies
npm install

# Build the theme
npm run build

# Package for installation
npm run package

# Install the packaged extension
code --install-extension ./gruvbox-material-dark-hard-er-*.vsix
```

## Attribution

This project is based on the excellent work of [sainnhe](https://github.com/sainnhe) and the original [Gruvbox Material VS Code theme](https://github.com/sainnhe/gruvbox-material-vscode). The color palette and design principles remain faithful to the original Gruvbox Material theme.

## Guidelines

- Keep the theme focused on the single "Material Dark Hard" variant
- Maintain consistency with the original Gruvbox Material color palette
- Test changes across different file types and languages
- Update the changelog when making changes
