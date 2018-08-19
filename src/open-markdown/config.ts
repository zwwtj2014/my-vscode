import * as vscode from "vscode";

const OPEN_MARKDOWN_KEY = "open-markdown";

export function getConfig(): OpenMDConfig {
  const config = vscode.workspace.getConfiguration(OPEN_MARKDOWN_KEY);

  return {
    defaultApp: config.get("defaultApp") || "typora",
    isElectron: config.get("isElectron") || true
  };
}

interface OpenMDConfig {
  defaultApp: string; // Set default app to open markdown
  isElectron: boolean; // Set Identify the electron app
}
