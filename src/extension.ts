"use strict";
import * as vscode from "vscode";
import { open } from "./open-markdown/open";

const CommandWithHandler = {
  "extension.openMarkDown": (uri: vscode.Uri) => {
    open(uri.fsPath);
  }
};

export function activate(context: vscode.ExtensionContext) {
  console.log("Plugin Clam VSCode started...");

  for (const key of Object.keys(CommandWithHandler)) {
    context.subscriptions.push(
      vscode.commands.registerCommand(key, CommandWithHandler[key])
    );
  }
}

export function deactivate() {}
