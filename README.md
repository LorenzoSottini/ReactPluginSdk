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
- `packages/plugin-eslint-config`: configurazione ESLint condivisa per i plugin
- `packages/plugin-tools`: utility per manifest plugin in dev e build
- `host`: applicazione host di esempio
- `plugins/example-plugin`: plugin con React bundled
- `plugins/example-plugin-react-peer`: plugin con React peer/external

## Linting condiviso plugin

Package: `@acme/plugin-eslint-config` (`packages/plugin-eslint-config`)

Scopo:

- centralizzare le regole ESLint per tutti i plugin
- imporre il contratto dell'entrypoint plugin (`src/index.ts` con solo default export)

Regole principali attive:

- config base TypeScript + `eslint-plugin-import`
- su `src/index.ts`: `import/no-named-export: error`

Uso nel plugin:

```js
// eslint.config.js
import config from "@acme/plugin-eslint-config";

export default [...config];
```

Dipendenze minime (dev):

- `eslint@^9`
- `@typescript-eslint/eslint-plugin@^8`
- `@typescript-eslint/parser@^8`
- `eslint-plugin-import@^2.29`

## Lifecycle runtime

1. Host scarica `manifest.json`
2. Host importa `manifest.entry` via `import()`
3. Il modulo plugin esporta una `PluginDefinition` (default export)
4. Host registra il Web Component (`registerPluginWebComponent(pluginDefinition)`)
5. Host crea l'elemento con `document.createElement(manifest.tagName)`
6. Host imposta `plugin-id` e `ctx`
7. Il Web Component host-driven invoca `mount(container, ctx)` nel `connectedCallback`
8. In `disconnectedCallback` viene eseguito l'unmount/cleanup ritornato da `mount`

File riferimento: `host/src/PluginLoader.ts`, `host/src/PluginRegister/RegisterPlugin.ts`

## Plugin entrypoint (nuovo pattern)

L'entrypoint non registra piu direttamente il custom element.
Ogni plugin espone il default export compatibile con `PluginDefinition`:

```ts
import { definePlugin } from "@acme/plugin-react";
import { PluginRoot } from "./PluginRoot";
import { META } from "./meta";

export default definePlugin({
  ...META,
  Root: PluginRoot,
});
```

## Manifest plugin (plugin-tools)

Per evitare incongruenze tra contract e manifest, usare il plugin Vite:

```ts
import { pluginManifest } from "@acme/plugin-tools";

pluginManifest({ meta: META, version: PACKAGE.version });
```

Comportamento:

- in dev espone `manifest.json` dal dev server del plugin, con `entry: "/src/index.ts"`
- in build genera `dist/manifest.json`, con `entry: "index.js"`

Esempio URL caricati dall'host:

- dev: `http://localhost:5174/manifest.json`
- build: `http://localhost:5174/dist/manifest.json`

Il manifest contiene:

- `id`, `name`, `description`, `type`
- `tagName` composto da `PLUGIN_TAGS_PREFIX[type] + '-' + id`
- `contractVersion`
- `version`
- `entry`

Compatibilita legacy:

- `postBuildPluginManifest` resta disponibile e mantiene il comportamento storico (solo post-build)

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
- `packages/plugin-react/src/definePlugin.ts`
- `packages/plugin-tools/src/index.ts`
- `host/src/PluginLoader.ts`
- `host/src/PluginRegister/RegisterPlugin.ts`
- `plugins/example-plugin/vite.config.ts`
- `plugins/example-plugin-react-peer/vite.config.ts`
