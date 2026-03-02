import { spawn } from "node:child_process";

export async function installPluginDependencies(
  targetPath: string,
): Promise<void> {
  await runCommand("pnpm", ["install"], targetPath);
}

function runCommand(
  command: string,
  args: string[],
  cwd: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    });

    child.on("error", (error) => {
      reject(error);
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Comando fallito: ${command} ${args.join(" ")}`));
    });
  });
}
