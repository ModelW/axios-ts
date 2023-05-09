import {
  defineNuxtModule,
  addPlugin,
  addImportsDir,
  createResolver,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@model-w/axios",
    configKey: "axios",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("runtime", "plugin"));
    addImportsDir(resolver.resolve("runtime", "composables"))
  },
});
