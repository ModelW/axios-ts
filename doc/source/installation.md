# Installation

You can install Model W Axios in your project with the following command.

```shell
npm install @model-w/axios
```

Then, configure the module in the `nuxt.config.ts` file. 
Here is a minimalistic example:

```typescript
export default defineNuxtConfig(
  {
    modules: [
        "@model-W/axios"
    ],
    runtimeConfig: {
        apiUrl: process.env.API_URL ? process.env.API_URL : "http://localhost:3000",
        public: {
            baseUrl: process.env.BASE_URL ? process.env.BASE_URL : "http://localhost:3000"
        }
    }
  }
)
```
