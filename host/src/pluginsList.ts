// Lista statica dei plugin disponibili - Bozza del pluginManager

export const PLUGINS_AVAILABLE = {
  EXAMPLE_ROUTE: {
    desc: "esempio react 19 bundled",
    manifestUrl: "http://localhost:5174/dist/manifest.json",
  },
  EXample_react_peer: {
    desc: "esempio react 19 peer",
    manifestUrl: "http://localhost:5175/dist/manifest.json",
  },
  EXample_angular: {
    desc: "esempio Angularjs",
    manifestUrl: "http://localhost:5176/dist/manifest.json",
  },
  react18Peer: {
    desc: "react 18 peer con vite cdn",
    manifestUrl: "http://localhost:5178/dist/manifest.json",
  },
  react18PeerScoped: {
    desc: "react 18 peer con import map scoped lato host",
    manifestUrl: "http://localhost:5180/dist/manifest.json",
  },
} as const;
