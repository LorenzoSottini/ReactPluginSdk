import { relative, resolve, sep } from "node:path";

export function toPortablePath(p: string): string {
  return p.split(sep).join("/");
}

export function assertInsideRoot(root: string, absolutePath: string): void {
  const rel = relative(resolve(root), resolve(absolutePath));
  if (rel.startsWith("..") || rel.includes(`..${sep}`)) {
    throw new Error(`Template path traversal non consentito: ${absolutePath}`);
  }
}

export function stripEjsExtension(p: string): string {
  return p.endsWith(".ejs") ? p.slice(0, -4) : p;
}
