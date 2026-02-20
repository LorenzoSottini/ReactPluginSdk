import { jsx, jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
const s = {
  ROUTE: "ROUTE",
  WIDGET: "WIDGET",
  COMMAND: "COMMAND"
}, t = {
  ROUTE: "plugin-route",
  COMMAND: "plugin-command",
  WIDGET: "plugin-widget"
};
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
  if (!def || typeof def !== "object") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: expected object"
    );
  }
  if (typeof def.id !== "string" || def.id.trim().length === 0) {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'id' is required"
    );
  }
  if (typeof def.type !== "string" || !(def.type in s)) {
    throw new Error(
      `[definePlugin] Invalid plugin definition: 'type' must be one of ${Object.keys(
        s
      ).join(", ")}`
    );
  }
  if (typeof def.Root !== "function") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'Root' must be a component"
    );
  }
  if (def.activate !== void 0 && typeof def.activate !== "function") {
    throw new Error(
      "[definePlugin] Invalid plugin definition: 'activate' must be a function"
    );
  }
  return def;
}
const GLOBAL_PLUGIN_REGISTRY_KEY = "__acme_plugin_registry__";
function getGlobalPluginRegistry() {
  const runtimeGlobal = globalThis;
  runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY] ??= /* @__PURE__ */ new Map();
  return runtimeGlobal[GLOBAL_PLUGIN_REGISTRY_KEY];
}
const pluginRegistry = getGlobalPluginRegistry();
function getPluginFromRegistry(type, id) {
  return pluginRegistry.get(type)?.get(id);
}
function setPluginInTypeRegistry(plugin2, mount) {
  const type = plugin2.type;
  let typeRegistry = pluginRegistry.get(type);
  if (!typeRegistry) {
    typeRegistry = /* @__PURE__ */ new Map();
    pluginRegistry.set(type, typeRegistry);
  }
  typeRegistry.set(plugin2.id, { plugin: plugin2, mount });
}
const PLUGIN_ID_ATTR = "plugin-id";
function registerReactPluginWebComponent({ plugin: plugin2 }) {
  const type = plugin2.type;
  const tag = t[type];
  setPluginInTypeRegistry(
    plugin2,
    (container, ctx) => {
      const root = ReactDOM.createRoot(container);
      root.render(PluginProvider(ctx, React.createElement(plugin2.Root)));
      let cleanup;
      if (plugin2.activate) {
        const result = plugin2.activate(ctx);
        if (typeof result === "function") cleanup = result;
      }
      return () => {
        cleanup?.();
        root.unmount();
      };
    }
  );
  class PluginElement extends HTMLElement {
    ctx;
    unmount;
    container;
    shadow;
    connectedCallback() {
      if (this.unmount) return;
      const _element = this;
      const ctx = _element.ctx;
      if (!ctx) {
        throw new Error("Context not provided!");
      }
      const pluginId = this.getAttribute(PLUGIN_ID_ATTR);
      if (!pluginId) {
        throw new Error(`Missing ${PLUGIN_ID_ATTR} attribute!`);
      }
      const registration = getPluginFromRegistry(type, pluginId);
      if (!registration) {
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
      const teardown = registration.mount(
        this.container,
        ctx
      );
      if (typeof teardown === "function") this.unmount = teardown;
    }
    disconnectedCallback() {
      this.unmount?.();
      this.unmount = void 0;
      this.container?.remove();
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
const META = {
  id: "acme.react-peer",
  name: "Plugin React in PeerPlugin React",
  description: "Plugin ROUTE con React che viene fornito dall'host",
  type: "WIDGET"
};
const plugin = definePlugin({
  ...META,
  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show(`Plugin activated: ${ctx.manifest.name}`);
    return () => ctx.services.toast.show(`Plugin deactivated ${ctx.manifest.name}`);
  }
});
registerReactPluginWebComponent({
  plugin
});
