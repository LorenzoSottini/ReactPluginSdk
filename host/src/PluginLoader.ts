import type {
  PluginContext,
  PluginElementWithCtx,
  PluginManifest,
} from "@acme/plugin-contracts";
import { PLUGIN_TAGS } from "@acme/plugin-contracts";

export async function loadPluginFromManifest(options: {
  manifestUrl: string;
  mount: HTMLElement;
  user: PluginContext["user"];
  services: PluginContext["services"];
}): Promise<PluginElementWithCtx> {
  const response = await fetch(options.manifestUrl);
  if (!response.ok) {
    throw new Error(`Manifest fetch failed (${response.status})`);
  }

  const manifest = (await response.json()) as PluginManifest;
  const entryUrl = new URL(manifest.entry, response.url).href;

  // Import del plugin - Il Plugin runtime si occupa di definire sulla window il WebComponent con custom tag
  await import(/* @vite-ignore */ entryUrl);

  const pluginEl = document.createElement(
    PLUGIN_TAGS[manifest.type],
  ) as PluginElementWithCtx;
  // Aggiunta dell'id sul nodo
  pluginEl.setAttribute("plugin-id", manifest.id);

  // Passaggio del context
  pluginEl.ctx = {
    contractVersion: manifest.contractVersion,
    user: options.user,
    services: options.services,
  };

  options.mount.replaceChildren(pluginEl);
  return pluginEl;
}

export function clearPluginMount(mount: HTMLElement) {
  mount.replaceChildren();
}
