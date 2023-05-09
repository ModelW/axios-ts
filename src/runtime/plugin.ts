import { defineNuxtPlugin } from "#app";
import { useAxios } from "./composables/axios";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: useAxios(),
    },
  };
});
