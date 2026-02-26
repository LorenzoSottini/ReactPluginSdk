// Lista statica dei plugin disponibili - Bozza del pluginManager

export const PLUGINS_AVAILABLE = {
  EXAMPLE_ROUTE: {
    manifestUrl: "http://localhost:5174/dist/manifest.json",
  },
  EXample_react_peer: {
    manifestUrl: "http://localhost:5175/dist/manifest.json",
  },
  EXample_angular: {
    manifestUrl: "http://localhost:5176/dist/manifest.json",
  },
} as const;
