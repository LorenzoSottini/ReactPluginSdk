import {
  composeTagName,
  type PluginContext,
  type PluginDefinition,
  type PluginElementWithCtx,
  type PluginManifest,
} from "@acme/plugin-contracts";
import { registerPluginWebComponent } from "./PluginRegister";

type LoadPluginFromManifestParams = {
  manifestUrl: string;
  hostElement: HTMLElement;
  user: PluginContext["user"];
  services: PluginContext["services"];
};
export async function loadPluginFromManifest({
  manifestUrl,
  hostElement,
  user,
  services,
}: LoadPluginFromManifestParams): Promise<PluginElementWithCtx> {
  const response = await fetch(manifestUrl);
  if (!response.ok) {
    throw new Error(`Manifest fetch failed (${response.status})`);
  }

  // 1) Recupero il manifest
  const manifest = (await response.json()) as PluginManifest;
  const entryUrl = new URL(manifest.entry, response.url).href;

  // 2) Recupero il modulo ESM che fornisce il pluginDefinition
  // Import del plugin - Il Plugin runtime si occupa di definire sulla window il WebComponent con custom tag
  const pluginDefinition = await import(/* @vite-ignore */ entryUrl)
    .then((module) => module.default as unknown as PluginDefinition)
    .catch((e) => console.error(`Failed to load plugin ${manifest.id}`, e));

  if (
    !pluginDefinition ||
    manifest.id !== pluginDefinition.id ||
    manifest.type !== pluginDefinition.type
  ) {
    throw new Error(
      `BROKEN CONTRACT: mismatch betwee Manifest and PluginDefinition: ${manifest.id} ${manifest.type} ${manifest.name}`,
    );
  }
  // 3) Registro il plugin e il WebComponet
  registerPluginWebComponent(pluginDefinition);

  // 4) Creo il WebComponet
  const pluginEl = document.createElement(
    composeTagName(pluginDefinition.id, pluginDefinition.type),
  ) as PluginElementWithCtx;
  // Aggiunta dell'id sul nodo
  pluginEl.setAttribute("plugin-id", manifest.id);

  // 5) Inject del context
  // Passaggio del context
  pluginEl.ctx = {
    contractVersion: manifest.contractVersion,
    user: user,
    services: services,
    manifest: manifest,
  } satisfies PluginContext<typeof manifest.type>;

  // 6) Append del plugin all'hostElement
  hostElement.replaceChildren(pluginEl);
  return pluginEl;

  /** STRUTTURA NEL DOM
   *  - hostElement
   *  -- WebComponent
   *  --- Plugin Root
   *  ---- Providers
   *  ----- Plugin Content
   */
}

export function clearPluginMount(mount: HTMLElement) {
  mount.replaceChildren();
}
