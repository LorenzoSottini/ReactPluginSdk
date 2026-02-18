import type {
  PluginContext,
  PluginElementWithCtx,
  PluginManifest,
} from "@acme/plugin-contracts";

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

  await import(/* @vite-ignore */ entryUrl);

  const pluginEl = document.createElement(
    manifest.webComponentTag,
  ) as PluginElementWithCtx;

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
