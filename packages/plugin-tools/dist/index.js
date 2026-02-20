import { PLUGIN_TAGS_PREFIX, CONTRACT_VERSION } from "@acme/plugin-contracts";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
function postBuildPluginManifest({
  meta,
  version,
  distDir = "dist",
  entry = "index.js",
  manifestFileName = "manifest.json",
  pluginName = "acme:post-build-plugin-manifest"
}) {
  return {
    name: pluginName,
    async closeBundle() {
      const pluginManifest = {
        ...meta,
        tagName: `${PLUGIN_TAGS_PREFIX[meta.type]}-${meta.id}`,
        contractVersion: CONTRACT_VERSION,
        version,
        entry
      };
      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest, null, 2)}
`
      );
    }
  };
}
export {
  postBuildPluginManifest
};
