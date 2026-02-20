import { CONTRACT_VERSION as a } from "@acme/plugin-contracts";
import { mkdir as m, writeFile as u } from "node:fs/promises";
import { join as l } from "node:path";
function d({
  meta: n,
  version: t,
  distDir: i = "dist",
  entry: e = "index.js",
  manifestFileName: o = "manifest.json",
  pluginName: r = "acme:post-build-plugin-manifest"
}) {
  return {
    name: r,
    async closeBundle() {
      const s = {
        ...n,
        contractVersion: a,
        version: t,
        entry: e
      };
      await m(i, { recursive: !0 }), await u(
        l(i, o),
        `${JSON.stringify(s, null, 2)}
`
      );
    }
  };
}
export {
  d as postBuildPluginManifest
};
