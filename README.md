# ACME Plugin SDK Example (con hook)

Esempio minimale di SDK React per plugin.

Contiene:

- packages/plugin-contracts: tipi condivisi (PluginContext, servizi host)
- packages/plugin-react: definePlugin + React Context + hook (useServices, useUser)
- packages/plugin-runtime: bootstrap Web Component + mount React + provider
- example-plugin: plugin di esempio che usa gli hook (niente `ctx.services...`)
