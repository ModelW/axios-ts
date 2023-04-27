export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      baseUrl: process.env.BASE_URL
    }
  },
})
