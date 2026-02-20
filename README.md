# ACME Plugin SDK

Piattaforma di riferimento per sviluppare, caricare ed eseguire plugin React in una applicazione host, con integrazione contract-first e caricamento dinamico ESM.

## Obiettivo

Questo repository mostra un modello plugin in cui:

- i plugin sono indipendenti dall'host
- host e plugin comunicano tramite contratto tipizzato condiviso
- il caricamento avviene a runtime con `manifest.json` + `import()`
- il rendering avviene dentro Web Components con isolamento via Shadow DOM

## Pacchetti principali

- `packages/plugin-contracts`: tipi e costanti condivise tra host e plugin
- `packages/plugin-react`: SDK React (`definePlugin`, hooks, provider)
- `packages/plugin-runtime`: bridge Web Component <-> React
- `packages/plugin-tools`: utility build-time (es. generazione `manifest.json`)
- `host`: applicazione host di esempio
- `plugins/example-plugin`: plugin con React bundled
- `plugins/example-plugin-react-peer`: plugin con React peer/external

## Contratto aggiornato

File chiave: `packages/plugin-contracts/src/index.ts`

Punti importanti:

- tipi plugin: `PLUGIN_TYPES` (`ROUTE`, `WIDGET`, `COMMAND`)
- prefisso tag per tipo: `PLUGIN_TAGS_PREFIX`
- `PluginManifest` ora include `tagName` (non piu derivato solo lato host)

Estratto semplificato:

```ts
export type PluginManifest<PT extends PluginTypes = PluginTypes> = PluginMeta & {
  type: PT;
  tagName: `${(typeof PLUGIN_TAGS_PREFIX)[PT]}-${PluginMeta["id"]}`;
  version: string;
  contractVersion: ContractVersion;
  entry: string;
};
```

## Lifecycle runtime

1. Host scarica `manifest.json`
2. Host importa `manifest.entry` via `import()`
3. Plugin entry registra il Web Component con runtime
4. Host crea l'elemento con `document.createElement(manifest.tagName)`
5. Host imposta `plugin-id` e `ctx`
6. Runtime monta React nel `connectedCallback`
7. Runtime esegue cleanup nel `disconnectedCallback`

File riferimento: `host/src/PluginLoader.ts`

## Generazione manifest (plugin-tools)

Per evitare incongruenze tra contract e manifest, usare il plugin Vite:

```ts
import { postBuildPluginManifest } from "@acme/plugin-tools";

postBuildPluginManifest({ meta: META, version: PACKAGE.version });
```

Il tool genera `dist/manifest.json` con:

- `id`, `name`, `description`, `type`
- `tagName` composto da `PLUGIN_TAGS_PREFIX[type] + '-' + id`
- `contractVersion`
- `version`
- `entry`

## Note per plugin React peer

Se il plugin esternalizza React, l'host deve risolvere gli import bare (`react`, `react-dom`, `react/jsx-runtime`, ecc.) tramite import map o strategia equivalente in produzione.

Nota: dentro `<script type="importmap">` deve esserci JSON puro valido.

## Comandi utili

Da root:

- `pnpm run dev`
- `pnpm run build`
- `pnpm run check:ts`

Per singolo plugin:

- `pnpm --filter example-plugin run build`
- `pnpm --filter example-plugin-react-peer run build`

## File chiave

- `packages/plugin-contracts/src/index.ts`
- `packages/plugin-runtime/src/index.ts`
- `packages/plugin-tools/src/index.ts`
- `host/src/PluginLoader.ts`
- `plugins/example-plugin/vite.config.ts`
- `plugins/example-plugin-react-peer/vite.config.ts`
