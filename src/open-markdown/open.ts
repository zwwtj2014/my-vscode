import * as isWsl from "is-wsl";
import * as opn from "opn";
import { getConfig } from "./config";

/**
 * vscode 扩展访问electron有环境变量问题
 * // https://stackoverflow.com/help/whats-reputation
 */
function workaround(fsPath: string, appPath: string) {
  const spawn_env = JSON.parse(JSON.stringify(process.env));
  //   console.log(process.env);
  delete spawn_env.ATOM_SHELL_INTERNAL_RUN_AS_NODE;
  delete spawn_env.ELECTRON_RUN_AS_NODE;
  require("child_process").spawn("cmd", ["/c", "start", "", appPath, fsPath], {
    env: spawn_env,
    detached: true
  });
}

function isWin32(): boolean {
  return process.platform === "win32" || isWsl;
}
export function open(fsPath: string) {
  const config = getConfig();
  if (config.isElectron && isWin32()) {
    workaround(fsPath, config.defaultApp);
  } else {
    opn(fsPath, {
      app: config.defaultApp
    });
  }
}
