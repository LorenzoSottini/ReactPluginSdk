import { createContext, useContext, createElement, useState } from "react";
import ReactDOM from "react-dom/client";
import { jsx, jsxs } from "react/jsx-runtime";
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
const PLUGIN_TYPES = {
  ROUTE: "ROUTE",
  WIDGET_DESKTOP: "WIDGET_DESKTOP",
  WIDGET_TASK: "WIDGET_TASK",
  COMMAND: "COMMAND",
  COMMAND_PROFILATION: "COMMAND_PROFILATION"
};
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
function validateBaseConfig(config) {
  assert(
    !!config && typeof config === "object",
    "Invalid config: expected object"
  );
}
function validateId(config) {
  assert(
    typeof config.id === "string" && config.id.trim().length > 0,
    "Invalid config: 'id' is required"
  );
}
function validateKnownPluginType(config) {
  assert(
    typeof config.type === "string" && config.type in PLUGIN_TYPES,
    `Invalid config: 'type' must be one of ${Object.keys(PLUGIN_TYPES).join(", ")}`
  );
}
function validateRoot(config, required) {
  {
    assert(
      typeof config.Root === "function",
      "Invalid config: 'Root' must be a component"
    );
    return;
  }
}
function validateActivate(config) {
  assert(
    config.activate === void 0 || typeof config.activate === "function",
    "Invalid config: 'activate' must be a function"
  );
}
function validateConfig(config) {
  validateBaseConfig(config);
  validateId(config);
  validateKnownPluginType(config);
  validateRoot(config);
  validateActivate(config);
}
function createReactMount(Root, activate, pluginName) {
  return (container, ctx) => {
    const root = ReactDOM.createRoot(container);
    root.render(PluginProvider(ctx, createElement(Root)));
    let cleanup;
    if (activate) {
      console.log(`Plugin Activated: ${pluginName}`);
      const result = activate(ctx);
      if (typeof result === "function") cleanup = result;
    }
    return () => {
      cleanup?.();
      root.unmount();
      console.log(`Plugin Deactivated: ${pluginName}`);
    };
  };
}
function definePlugin(config) {
  validateConfig(config);
  const { Root, activate, ...meta } = config;
  const mount = createReactMount(Root, activate, config.name);
  return { ...meta, mount };
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
  id: "react-peer",
  // Sarà generato dalla CLI
  name: "Plugin React in PeerPlugin React",
  description: "Plugin ROUTE con React che viene fornito dall'host",
  type: "WIDGET_DESKTOP"
};
const plugin = definePlugin({
  ...META,
  Root: PluginRoot,
  activate(ctx) {
    ctx.services.toast.show(`Plugin activated: ${ctx.manifest.name}`);
    return () => ctx.services.toast.show(`Plugin deactivated ${ctx.manifest.name}`);
  }
});
export {
  plugin as default
};
//# sourceMappingURL=index.js.map
