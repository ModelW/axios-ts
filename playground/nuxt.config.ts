export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig: {
    apiUrl: process.env.API_URL ? process.env.API_URL : "http://localhost:3000",
    public: {
      baseUrl: process.env.BASE_URL ? process.env.BASE_URL : ""
    }
  },
})
