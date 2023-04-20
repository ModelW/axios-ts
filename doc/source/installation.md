# Installation

In order to install the Model W Axios, you need to add it to the `package.json`, for example `"@model-w/axios": "~0.4.3"`, or use the next command 
```commandline
npm install @model-w/axios
```

Then you can use it in your project modifying the `nuxt.config.ts` file. 
Here is a minimalistic example:

```typescript
export default defineNuxtConfig(
  {
    modules: [
        "@model-W/proxy"
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
When you have added it to this configuration, you are ready to use it.
