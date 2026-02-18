var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsx, jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
const PluginReactContext = createContext(null);
function PluginProvider(ctx, children) {
  return /* @__PURE__ */ jsx(PluginReactContext.Provider, { value: ctx, children });
}
function usePluginContext() {
  const ctx = useContext(PluginReactContext);
  if (!ctx) {
    throw new Error("usePluginContext must be used inside <PluginProvider />");
  }
  return ctx;
}
function useServices() {
  return usePluginContext().services;
}
function useUser() {
  return usePluginContext().user;
}
function useManifest() {
  return usePluginContext().manifest;
}
function definePlugin(def) {
  return def;
}
const version = "0.1.0";
const packageJson = {
  version
};
const CONTRACT_VERSION = packageJson.version;
const PLUGIN_TYPES = {
  ROUTE: "ROUTE"
};
const PLUGIN_TAGS = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget"
};
const PLUGIN_ID_ATTR = "plugin-id";
const GLOBAL_PLUGIN_REGISTRY_KEY = "__acme_plugin_registry__";
function getGlobalPluginRegistry() {
  const runtimeGlobal = globalThis;
  runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY] ?? (runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY] = /* @__PURE__ */ new Map());
  return runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY];
}
const pluginRegistry = getGlobalPluginRegistry();
function getPlugin(type, id2) {
  var _a;
  return (_a = pluginRegistry.get(type)) == null ? void 0 : _a.get(id2);
}
function setPluginInTypeRegistry(plugin2) {
  const type = plugin2.type;
  let typeRegistry = pluginRegistry.get(type);
  if (!typeRegistry) {
    typeRegistry = /* @__PURE__ */ new Map();
    pluginRegistry.set(type, typeRegistry);
  }
  typeRegistry.set(plugin2.id, plugin2);
}
function registerReactPluginWebComponent({ plugin: plugin2 }) {
  const type = plugin2.type;
  const tag = PLUGIN_TAGS[type];
  setPluginInTypeRegistry(plugin2);
  class PluginElement extends HTMLElement {
    constructor() {
      super(...arguments);
      __publicField(this, "root");
      __publicField(this, "cleanup");
      __publicField(this, "container");
      __publicField(this, "shadow");
    }
    connectedCallback() {
      if (this.root) return;
      const _element = this;
      const ctx = _element.ctx;
      if (!ctx) {
        throw new Error("Context not provided!");
      }
      const pluginId = this.getAttribute(PLUGIN_ID_ATTR);
      if (!pluginId) {
        throw new Error(`Missing ${PLUGIN_ID_ATTR} attribute!`);
      }
      const plugin22 = getPlugin(type, pluginId);
      if (!plugin22) {
        throw new Error(
          `Plugin not registered for type "${type}" and id "${pluginId}"`
        );
      }
      if (ctx.manifest.type !== type) {
        throw new Error(
          `Context type mismatch: expected "${type}", got "${ctx.manifest.type}"`
        );
      }
      this.shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      this.container = document.createElement("div");
      this.shadow.replaceChildren(this.container);
      this.root = ReactDOM.createRoot(this.container);
      this.root.render(PluginProvider(ctx, React.createElement(plugin22.Root)));
      if (plugin22.activate) {
        const result = plugin22.activate(ctx);
        if (typeof result === "function") this.cleanup = result;
      }
    }
    disconnectedCallback() {
      var _a, _b, _c;
      (_a = this.cleanup) == null ? void 0 : _a.call(this);
      this.cleanup = void 0;
      (_b = this.root) == null ? void 0 : _b.unmount();
      this.root = void 0;
      (_c = this.container) == null ? void 0 : _c.remove();
      this.container = void 0;
      this.shadow = void 0;
    }
  }
  if (!customElements.get(tag)) {
    customElements.define(tag, PluginElement);
  }
}
function PluginRoot() {
  const services = useServices();
  const manifest = useManifest();
  const user = useUser();
  const [val, setVal] = useState("");
  return /* @__PURE__ */ jsxs("div", { style: { padding: 10, border: "1px solid #ccc" }, children: [
    /* @__PURE__ */ jsx("h3", { children: manifest.name }),
    /* @__PURE__ */ jsxs("p", { children: [
      " Utente from Host: ",
      user.displayName
    ] }),
    /* @__PURE__ */ jsx("label", { children: "Dettagli del manifest from Host" }),
    /* @__PURE__ */ jsxs("ul", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "id:" }),
        " ",
        manifest.id
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "name:" }),
        " ",
        manifest.name
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "type:" }),
        " ",
        manifest.type
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "contractVersion:" }),
        " ",
        manifest.contractVersion
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "version:" }),
        " ",
        manifest.version
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: "Notifica all'host",
          value: val,
          onChange: (e) => setVal(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => services.toast.show(`Hello from plugin:${val}`),
          type: "button",
          children: "Send message in console"
        }
      )
    ] })
  ] });
}
const id = "acme.react-peer";
const plugin = definePlugin({
  type: PLUGIN_TYPES.ROUTE,
  id,
  contractVersion: CONTRACT_VERSION,
  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show(`Plugin activated: ${ctx.manifest.name}`);
    return () => ctx.services.toast.show(`Plugin deactivated ${ctx.manifest.name}`);
  }
});
registerReactPluginWebComponent({
  plugin
});
