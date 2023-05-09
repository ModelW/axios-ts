# Installation

You can install Model W Axios in your project with the following command.

```commandline
npm install @model-w/axios
```

Then you can use it in your project modifying the `nuxt.config.ts` file.
Here is a minimalistic example:

```typescript
export default defineNuxtConfig(
  {
    runtimeConfig: {
      apiUrl: process.env.API_URL,
      public: {
        baseUrl: process.env.BASE_URL
      }
    },
    modules: [
      "@model-W/proxy"
    ],
  }
)
```

When you have added it to this configuration, you are ready to use it.
