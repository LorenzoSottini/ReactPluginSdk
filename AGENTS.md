# ACME Plugin Platform — Project Context

## Overview

This project implements a plugin platform that allows third-party developers to create React-based plugins that can be dynamically loaded and executed inside a host web application.

Plugins are built as independent ESM modules and exposed as Web Components. The host application loads plugins dynamically at runtime via URL, injects a runtime context, and provides shared services.

The platform consists of four main parts:

* Plugin Contracts
* Plugin React SDK
* Plugin Runtime
* Host Application Loader

The architecture is designed to ensure strong isolation, backward compatibility, and independent plugin deployment.

---

## Core Architectural Principles

### 1. Contract-based integration

Plugins do not import host code directly.

Instead, plugins interact with the host exclusively through a strongly typed context object defined in:

packages/plugin-contracts

This contract represents the stable interface between host and plugins.

This ensures:

* backward compatibility
* safe plugin evolution
* independent deployments
* runtime validation capability

---

### 2. Plugins are delivered as ESM modules

Each plugin is compiled as a standalone ES module.

Example output:

dist/index.js

This module registers a Web Component globally using customElements.define.

The host dynamically imports the module using:

import(pluginEntryUrl)

This allows lazy loading and independent distribution.

---

### 3. Plugins are exposed as Web Components

Each plugin registers a Web Component with a unique tag name.

Example:

acme-example-plugin

The host instantiates plugins using:

document.createElement("acme-example-plugin")

This provides strong runtime isolation and framework independence.

---

### 4. React Context is used to provide host services

The runtime injects a PluginContext object into the plugin via a React Context provider.

Plugins access host functionality using React hooks:

useServices()
useUser()
usePluginContext()

This avoids prop drilling and ensures a clean developer experience.

---

## Repository Structure

packages/plugin-contracts

Contains:

* PluginContext type definition
* HostServices definition
* ContractVersion definitions

This package must remain stable and backward compatible.

---

packages/plugin-react

Contains:

* definePlugin helper
* PluginProvider React context provider
* Hooks:

  usePluginContext()
  useServices()
  useUser()

This package provides the main developer-facing SDK.

---

packages/plugin-runtime

Contains:

* registerReactPluginWebComponent

This function:

* registers the Web Component
* mounts React
* injects PluginProvider
* handles lifecycle (connectedCallback / disconnectedCallback)
* receives context from host via element.ctx

This is the bridge between the host and the plugin.

---

example-plugin

A sample plugin implementation.

Contains:

plugin.manifest.json
src/index.ts
src/PluginRoot.tsx

This demonstrates how plugins should be implemented.

---

## Plugin Lifecycle

1. Host fetches plugin manifest

2. Host dynamically imports plugin entry module

3. Plugin entry registers Web Component

4. Host creates Web Component instance

5. Host injection Context
