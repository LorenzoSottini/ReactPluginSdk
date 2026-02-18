# ACME Plugin SDK

Piattaforma di riferimento per sviluppare, caricare ed eseguire plugin React in una applicazione host, con integrazione basata su contratti tipizzati e caricamento dinamico ESM.

## Obiettivo del progetto

Questo repository dimostra un modello orientato ai plugin in cui:

- i plugin sono indipendenti dall'host
- la comunicazione host-plugin passa da un contratto stabile
- il caricamento avviene a runtime tramite manifest + import dinamico
- il rendering avviene dentro Web Components, con isolamento del contenuto plugin

In pratica: l'host decide *quando* e *quale* plugin caricare, il plugin decide *come* renderizzare la propria UI usando API host esposte via context.

## Attori principali

### 1. Applicazione Host

La host app:

- recupera il `plugin.manifest.json`
- risolve l'entry ESM del plugin
- importa dinamicamente il modulo (`import(entryUrl)`)
- crea l'istanza del Web Component in base al `type` del plugin
- inietta il `ctx` (utente, servizi, manifest, contractVersion)

File chiave:

- `host/src/PluginLoader.ts`
- `host/src/App.tsx`
- `host/vite.config.ts`
- `host/index.html`

### 2. Sviluppatore Plugin

Lo sviluppatore plugin:

- definisce il plugin via `definePlugin(...)`
- registra il plugin con `registerReactPluginWebComponent(...)`
- implementa il componente root React
- usa hook SDK (`useServices`, `useUser`, `useManifest`, `usePluginContext`)

File di esempio:

- `plugins/example-plugin/src/index.ts`
- `plugins/example-plugin/src/PluginRoot.tsx`
- `plugins/example-plugin-react-peer/src/index.ts`

### 3. Runtime Plugin

Il runtime è il ponte tra Web Components e React:

- associa `plugin.type` -> tag del custom element
- registra i plugin in una registry condivisa globale
- esegue la define dei customElement (WebComponent)
- al `connectedCallback` risolve il plugin corretto tramite `plugin-id`
- monta React dentro Shadow DOM
- invoca opzionalmente `activate(ctx)` e gestisce il cleanup su `disconnectedCallback`

File chiave:

- `packages/plugin-runtime/src/index.ts`

### 4. Livello Contratti

Il contratto definisce il confine stabile tra host e plugin:

- tipi supportati (`PLUGIN_TYPES`)
- mapping tipo -> tag (`PLUGIN_TAGS`)
- schema `PluginManifest`
- forma del `PluginContext`

File chiave:

- `packages/plugin-contracts/src/index.ts`
- `packages/plugin-contracts/src/Services.ts`

## Struttura del repository

- `packages/plugin-contracts`: contratto tipizzato condiviso
- `packages/plugin-react`: SDK React per sviluppatori plugin
- `packages/plugin-runtime`: runtime Web Component + mount React
- `host`: applicazione host di esempio
- `plugins/example-plugin`: plugin con React incluso nel bundle
- `plugins/example-plugin-react-peer`: plugin con React esternalizzato (peer)

## Flusso di lifecycle del plugin

1. L'host scarica il manifest plugin.
2. L'host importa dinamicamente il modulo entry.
3. Il modulo plugin registra (o aggiorna) il plugin nella registry per tipo/id.
4. L'host crea il custom element dal `type` (`PLUGIN_TAGS[type]`).
5. L'host imposta `plugin-id` e `ctx` sull'elemento.
6. Il `connectedCallback` del runtime monta React e attiva il plugin.
7. Il `disconnectedCallback` esegue cleanup e unmount.

## Architettura

### Boundary contract-first

Il contratto  la superficie di integrazione: riduce l'accoppiamento diretto tra host e plugin e permette evoluzione indipendente dei due lati.

### Composizione a runtime vs collegamento a compile-time

L'host non collega i plugin in fase di build: li scopre e li compone a runtime. Questo abilita deploy indipendente dei plugin e caricamento lazy.

### Web Components come unit di isolamento

L'uso di custom elements consente una boundary DOM chiara e framework-agnostic. Con Shadow DOM il plugin evita contaminazione CSS dall'host.

### Iniezione di context tipizzato

`ctx` è il canale unico di iniezione capability: utente, servizi host, metadati manifest. è obbligatorio nel contratto per garantire consistenza del runtime plugin.

### Registry condivisa su `globalThis`

Per supportare più bundle/plugin caricati separatamente, la registry runtime è globale. Questo evita mismatch in cui il custom element definito da un bundle non vede plugin registrati da un altro.

## Varianti di distribuzione plugin

### Plugin con bundle autonomo (self-contained)

`example-plugin` include React nel bundle plugin. Modalità più semplice per demo e ambienti controllati ma aumenta notevolmente la dimensione delle risorse caricate. Limita problemi di incompatibilità ta versioni react.

### Plugin React come peer dependency

`example-plugin-react-peer` esternalizza `react`/`react-dom` e richiede mapping lato host (`importmap`) in dev/prod.

Compromessi:

- pro: riduzione duplicazioni e runtime unificato
- contro: configurazione host più delicata (mapping, base path, proxy, compatibilità versioni, deploy)

## Avvio rapido

Prerequisiti:

- Node.js
- pnpm

Comandi principali (root):

- `pnpm run dev`: avvia host + plugin demo
- `pnpm run build`: build workspace
- `pnpm run check:ts`: type-check workspace

## Note operative importanti

- Il `manifest.type` deve essere coerente con `definePlugin({ type: ... })`.
- Il `manifest.id` deve essere coerente con `definePlugin({ id: ... })`.
- Se il plugin è React peer, l'host deve risolvere gli import `react`, `react-dom`, `react/jsx-runtime`, ecc.
- Con route proxy che condividono prefissi, evitare collisioni (`/plugin` vs `/plugin-peer`, ecc.).

## Dettaglio su `importmap`

`importmap` è una feature del browser che permette di mappare gli import ESM \"bare\" (es. `react`, `react-dom/client`) verso URL reali serviti dall'host.

Nel progetto viene usata in `host/index.html` per permettere ai plugin con React esternalizzato (peer) di risolvere correttamente le dipendenze condivise senza includerle nel proprio bundle.

Esempio di mapping:

```json
{
  "imports": {
    "react": "/@id/react",
    "react-dom": "/@id/react-dom",
    "react-dom/client": "/@id/react-dom/client",
    "react/jsx-runtime": "/@id/react/jsx-runtime",
    "react/jsx-dev-runtime": "/@id/react/jsx-dev-runtime"
  }
}
```

Cosa fa in pratica:

- quando un plugin importa `react`, il browser carica l'URL mappato (`/@id/react`)
- host e plugin puntano allo stesso runtime React in dev
- si riduce il rischio di doppie istanze React e mismatch tra bundle

Nota: gli endpoint `@id` sono specifici del dev server Vite. In produzione serve una strategia equivalente (URL reali versionati, CDN privata o import map dedicata).

## Prossimi passi

1. Validazione runtime del manifest (schema validation, errori espliciti).
2. Crare la CLI/GUI per la generazione automatica le plugin template base
3. Definire dipendenze di sviluppo, lintint - check-type - test - validazioni
4. Fornire UI library e stile (tailwind)
5. Aggiornare il contratto allineandolo alle interfacce dei plugin angularjs
6. Fornire il tema by context e aggiornare lo stile interno
7. Creare MCP per generazione dei plugin tramite chatbot
8. Pipeline di release separata per i pacchetti `contracts`, `react-sdk`, `runtime`.
9. Strategia production per peer deps (import map versionata o CDN privata).
10. Documentazione per autori plugin con linee guida UX, error handling e performance budget.
