import { type PluginMeta } from "@acme/plugin-contracts";
import type { Plugin } from "vite";
export type PostBuildPluginManifestOptions = {
    meta: PluginMeta;
    version: string;
    distDir?: string;
    entry?: string;
    manifestFileName?: string;
    pluginName?: string;
};
export declare function postBuildPluginManifest({ meta, version, distDir, entry, manifestFileName, pluginName, }: PostBuildPluginManifestOptions): Plugin;
