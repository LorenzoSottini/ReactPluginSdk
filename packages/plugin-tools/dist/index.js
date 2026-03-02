import { CONTRACT_VERSION, composeTagName } from "@acme/plugin-contracts";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
function toPublicPath(entryPath) {
  const normalized = entryPath.replace(/\\/g, "/");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}
function createPluginManifest(meta, version, entry) {
  return {
    ...meta,
    tagName: composeTagName(meta.id, meta.type),
    contractVersion: CONTRACT_VERSION,
    version,
    entry
  };
}
function pluginManifest({
  meta,
  version,
  devEntry = "src/index.ts",
  buildEntry = "index.js",
  distDir = "dist",
  manifestFileName = "manifest.json",
  pluginName = "acme:plugin-manifest"
}) {
  let resolvedConfig;
  return {
    name: pluginName,
    configResolved(config) {
      resolvedConfig = config;
    },
    configureServer(server) {
      const manifestRoute = toPublicPath(manifestFileName);
      server.middlewares.use((req, res, next) => {
        const requestPath = req.url?.split("?")[0];
        if (requestPath !== manifestRoute) {
          next();
          return;
        }
        const pluginManifest2 = createPluginManifest(
          meta,
          version,
          toPublicPath(devEntry)
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(`${JSON.stringify(pluginManifest2, null, 2)}
`);
      });
    },
    async closeBundle() {
      if (resolvedConfig?.command !== "build") {
        return;
      }
      const pluginManifest2 = createPluginManifest(meta, version, buildEntry);
      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest2, null, 2)}
`
      );
    }
  };
}
function postBuildPluginManifest({
  meta,
  version,
  distDir = "dist",
  entry = "index.js",
  manifestFileName = "manifest.json",
  pluginName = "acme:post-build-plugin-manifest"
}) {
  let resolvedConfig;
  return {
    name: pluginName,
    configResolved(config) {
      resolvedConfig = config;
    },
    async closeBundle() {
      if (resolvedConfig?.command !== "build") {
        return;
      }
      const pluginManifest2 = createPluginManifest(meta, version, entry);
      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest2, null, 2)}
`
      );
    }
  };
}
export {
  pluginManifest,
  postBuildPluginManifest
};
