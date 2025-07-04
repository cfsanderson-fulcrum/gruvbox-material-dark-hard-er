/*---------------------------------------------------------------------------------------------
 *  Simplified Gruvbox Material Dark Hard Theme Generator
 *  Based on the original Gruvbox Material by Sainnhe Park
 *  License: MIT
 *--------------------------------------------------------------------------------------------*/

import * as fs from "fs";
import { join } from "path";

// Hard contrast palette - the only one we need
const palette = {
  bg0: "#070808",
  bg1: "#121212", 
  bg: "#1C1C1C",
  bg2: "#2a2827",
  bg3: "#2e2c2b",
  bg4: "#32302f",
  bg5: "#3d3835",
  bg6: "#46403d",
  bg7: "#514945",
  bg8: "#5a524c",
  bg9: "#665c54",
  grey0: "#7c6f64",
  grey1: "#928374",
  grey2: "#a89984",
  shadow: "#00000070",
  // Material foreground colors
  fg0: "#e2cca9",
  fg1: "#ddc7a1",
  fg: "#ddc7a1",
  red: "#ea6962",
  orange: "#e78a4e",
  yellow: "#d8a657",
  green: "#a9b665",
  aqua: "#89b482",
  blue: "#7daea3",
  purple: "#d3869b",
  dimRed: "#402120",
  dimOrange: "#3c2e0e",
  dimYellow: "#45410a",
  dimGreen: "#3b4439",
  dimAqua: "#374141",
  dimBlue: "#334e41",
  dimPurple: "#4c3d4a",
};

// Custom darker background for better contrast
const customDarkBg = "#171717";

function generateTheme() {
  const workbenchColors = {
    foreground: palette.grey2,
    focusBorder: `${palette.bg5}00`,
    "widget.shadow": palette.shadow,
    "selection.background": `${palette.bg6}d0`,
    descriptionForeground: palette.grey1,
    errorForeground: palette.red,
    "icon.foreground": palette.aqua,
    "textLink.foreground": palette.green,
    "textLink.activeForeground": palette.dimGreen,
    "textCodeBlock.background": palette.bg2,
    "textBlockQuote.background": palette.bg2,
    "textBlockQuote.border": palette.grey2,
    "textPreformat.foreground": palette.yellow,
    "toolbar.hoverBackground": palette.bg3,
    "button.background": palette.grey2,
    "button.hoverBackground": palette.grey1,
    "button.foreground": palette.bg,
    "button.secondaryBackground": palette.bg4,
    "button.secondaryForeground": palette.fg,
    "button.secondaryHoverBackground": palette.bg5,
    "checkbox.background": palette.bg,
    "checkbox.foreground": palette.orange,
    "checkbox.border": palette.bg7,
    "dropdown.border": palette.bg5,
    "dropdown.background": palette.bg,
    "dropdown.foreground": palette.grey2,
    "input.border": palette.bg5,
    "input.background": `${palette.bg}00`,
    "input.foreground": palette.fg,
    "input.placeholderForeground": palette.grey0,
    "inputOption.activeBorder": palette.aqua,
    "inputValidation.errorBorder": palette.red,
    "inputValidation.errorBackground": palette.dimRed,
    "inputValidation.errorForeground": palette.fg,
    "inputValidation.infoBorder": palette.blue,
    "inputValidation.infoBackground": palette.dimBlue,
    "inputValidation.infoForeground": palette.fg,
    "inputValidation.warningBorder": palette.yellow,
    "inputValidation.warningBackground": palette.dimYellow,
    "inputValidation.warningForeground": palette.fg,
    "scrollbar.shadow": palette.shadow,
    "scrollbarSlider.activeBackground": palette.grey2,
    "scrollbarSlider.hoverBackground": palette.bg9,
    "scrollbarSlider.background": `${palette.bg9}80`,
    "badge.background": palette.grey2,
    "badge.foreground": palette.bg,
    "progressBar.background": palette.green,
    "list.activeSelectionForeground": palette.fg,
    "list.activeSelectionBackground": `${palette.bg5}60`,
    "list.inactiveSelectionForeground": palette.grey2,
    "list.inactiveSelectionBackground": `${palette.bg5}48`,
    "list.dropBackground": `${palette.bg2}80`,
    "list.focusForeground": palette.fg,
    "list.focusBackground": `${palette.bg5}60`,
    "list.inactiveFocusBackground": `${palette.bg5}48`,
    "list.highlightForeground": palette.green,
    "list.hoverForeground": palette.fg,
    "list.hoverBackground": `${palette.bg}00`,
    "list.invalidItemForeground": palette.dimRed,
    "list.errorForeground": palette.red,
    "list.warningForeground": palette.yellow,
    "tree.indentGuidesStroke": palette.grey0,
    "activityBar.border": palette.bg,
    "activityBar.background": palette.bg,
    "activityBar.foreground": palette.grey2,
    "activityBar.inactiveForeground": palette.grey0,
    "activityBar.dropBackground": palette.bg,
    "activityBar.activeBorder": palette.grey1,
    "activityBar.activeFocusBorder": palette.grey1,
    "activityBarBadge.background": palette.grey2,
    "activityBarBadge.foreground": palette.bg,
    "sideBar.foreground": palette.grey1,
    "sideBar.background": customDarkBg, // Our custom darker background
    "sideBarSectionHeader.background": `${palette.bg}00`,
    "sideBarTitle.foreground": palette.grey2,
    "sideBarSectionHeader.foreground": palette.grey2,
    "minimap.findMatchHighlight": `${palette.dimAqua}60`,
    "minimap.selectionHighlight": `${palette.bg6}f0`,
    "minimap.errorHighlight": `${palette.dimRed}80`,
    "minimap.warningHighlight": `${palette.dimYellow}80`,
    "minimapGutter.addedBackground": `${palette.dimGreen}a0`,
    "minimapGutter.modifiedBackground": `${palette.dimBlue}a0`,
    "minimapGutter.deletedBackground": `${palette.dimRed}a0`,
    "editorGroup.border": palette.bg0,
    "editorGroupHeader.tabsBackground": palette.bg,
    "editorGroupHeader.noTabsBackground": palette.bg,
    "editorGroup.dropBackground": `${palette.bg5}60`,
    "tab.border": palette.bg,
    "tab.activeBorder": palette.grey2,
    "tab.inactiveBackground": palette.bg,
    "tab.hoverBackground": palette.bg,
    "tab.hoverForeground": palette.fg,
    "tab.activeBackground": palette.bg,
    "tab.activeForeground": palette.fg,
    "tab.inactiveForeground": palette.grey0,
    "tab.unfocusedActiveForeground": palette.grey2,
    "tab.unfocusedActiveBorder": palette.grey1,
    "tab.unfocusedInactiveForeground": palette.grey0,
    "tab.unfocusedHoverForeground": palette.fg,
    "tab.lastPinnedBorder": palette.grey2,
    "editor.background": palette.bg,
    "editor.foreground": palette.fg,
    "editorLineNumber.foreground": palette.bg9,
    "editorLineNumber.activeForeground": palette.grey1,
    "editorCursor.foreground": palette.fg,
    "editor.selectionBackground": `${palette.bg6}b0`,
    "editor.selectionHighlightBackground": `${palette.bg6}58`,
    "editor.inactiveSelectionBackground": `${palette.bg6}58`,
    "editor.wordHighlightBackground": `${palette.bg6}58`,
    "editor.wordHighlightStrongBackground": `${palette.bg6}b0`,
    "editor.hoverHighlightBackground": `${palette.bg6}b0`,
    "editor.findMatchBackground": `${palette.dimOrange}40`,
    "editor.findMatchHighlightBackground": `${palette.dimGreen}40`,
    "editor.findRangeHighlightBackground": `${palette.bg6}58`,
    "editor.lineHighlightBorder": `${palette.bg5}00`,
    "editor.lineHighlightBackground": `${palette.bg3}90`,
    "editor.rangeHighlightBackground": `${palette.bg3}80`,
    "editor.symbolHighlightBackground": `${palette.dimBlue}40`,
    "editorLink.activeForeground": palette.green,
    "editorWhitespace.foreground": palette.bg5,
    "editorIndentGuide.background": `${palette.grey2}20`,
    "editorIndentGuide.activeBackground": `${palette.grey2}50`,
    "editorInlayHint.background": `${palette.bg}00`,
    "editorInlayHint.foreground": palette.bg9,
    "editorInlayHint.typeBackground": `${palette.bg}00`,
    "editorInlayHint.typeForeground": palette.bg9,
    "editorInlayHint.parameterBackground": `${palette.bg}00`,
    "editorInlayHint.parameterForeground": palette.bg9,
    "editorRuler.foreground": `${palette.bg8}a0`,
    "editorCodeLens.foreground": palette.bg9,
    "editor.foldBackground": `${palette.bg5}80`,
    "editorBracketMatch.border": `${palette.bg}00`,
    "editorBracketMatch.background": `${palette.grey0}80`,
    "editorBracketHighlight.foreground1": palette.red,
    "editorBracketHighlight.foreground2": palette.yellow,
    "editorBracketHighlight.foreground3": palette.green,
    "editorBracketHighlight.foreground4": palette.blue,
    "editorBracketHighlight.foreground5": palette.orange,
    "editorBracketHighlight.foreground6": palette.purple,
    "editorBracketHighlight.unexpectedBracket.foreground": palette.grey1,
    "panel.background": customDarkBg, // Our custom darker background
    "panel.border": palette.bg,
    "panelInput.border": palette.bg5,
    "panelTitle.activeForeground": palette.grey2,
    "panelTitle.activeBorder": palette.grey1,
    "panelTitle.inactiveForeground": palette.grey0,
    "panelSection.border": palette.bg0,
    "panelSectionHeader.background": palette.bg,
    "statusBar.background": palette.bg,
    "statusBar.foreground": palette.grey2,
    "statusBar.border": palette.bg,
    "statusBar.debuggingForeground": palette.orange,
    "statusBar.debuggingBackground": palette.bg,
    "statusBar.noFolderBackground": palette.bg,
    "statusBar.noFolderForeground": palette.grey2,
    "statusBar.noFolderBorder": palette.bg,
    "statusBarItem.hoverBackground": palette.bg4,
    "statusBarItem.activeBackground": `${palette.bg4}a0`,
    "statusBarItem.prominentForeground": palette.fg,
    "statusBarItem.prominentBackground": palette.bg,
    "statusBarItem.prominentHoverBackground": `${palette.bg4}a0`,
    "statusBarItem.remoteBackground": palette.bg,
    "statusBarItem.remoteForeground": palette.grey2,
    "statusBarItem.errorBackground": palette.bg,
    "statusBarItem.errorForeground": palette.red,
    "statusBarItem.warningBackground": palette.bg,
    "statusBarItem.warningForeground": palette.yellow,
    "titleBar.activeBackground": palette.bg,
    "titleBar.activeForeground": palette.grey2,
    "titleBar.inactiveBackground": palette.bg,
    "titleBar.inactiveForeground": palette.grey0,
    "titleBar.border": palette.bg,
    "terminal.foreground": palette.fg,
    "terminal.background": customDarkBg, // Our custom darker background
    "terminalCursor.foreground": palette.fg,
    "terminal.ansiBlack": palette.bg2,
    "terminal.ansiBlue": palette.blue,
    "terminal.ansiBrightBlack": palette.grey1,
    "terminal.ansiBrightBlue": palette.blue,
    "terminal.ansiBrightCyan": palette.aqua,
    "terminal.ansiBrightGreen": palette.green,
    "terminal.ansiBrightMagenta": palette.purple,
    "terminal.ansiBrightRed": palette.red,
    "terminal.ansiBrightWhite": palette.fg0,
    "terminal.ansiBrightYellow": palette.yellow,
    "terminal.ansiCyan": palette.aqua,
    "terminal.ansiGreen": palette.green,
    "terminal.ansiMagenta": palette.purple,
    "terminal.ansiRed": palette.red,
    "terminal.ansiWhite": palette.fg,
    "terminal.ansiYellow": palette.yellow,
  };

  const syntaxColors = [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: palette.grey0,
        fontStyle: "italic",
      },
    },
    {
      name: "Variables",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: palette.fg,
      },
    },
    {
      name: "Keywords",
      scope: [
        "keyword",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Operators",
      scope: ["keyword.operator"],
      settings: {
        foreground: palette.orange,
      },
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Classes",
      scope: [
        "entity.name.type.class",
        "meta.class",
        "support.class",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Constants",
      scope: [
        "constant",
        "variable.other.constant",
        "support.constant",
      ],
      settings: {
        foreground: palette.aqua,
      },
    },
    {
      name: "Types",
      scope: [
        "entity.name.type",
        "keyword.type",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Strings",
      scope: ["string", "constant.other.symbol"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Built-in constants",
      scope: ["constant.language"],
      settings: {
        foreground: palette.purple,
      },
    },
  ];

  return {
    name: "Gruvbox Material Dark Hard-er",
    type: "dark",
    semanticHighlighting: true,
    colors: workbenchColors,
    tokenColors: syntaxColors,
  };
}

async function writeTheme() {
  const theme = generateTheme();
  const themePath = join(__dirname, "..", "themes", "gruvbox-material-dark-hard-er.json");
  
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(themePath, JSON.stringify(theme, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("✅ Generated gruvbox-material-dark-hard-er.json");
        resolve();
      }
    });
  });
}

writeTheme().catch(console.error);
