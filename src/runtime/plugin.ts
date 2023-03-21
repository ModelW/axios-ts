import superAxiosInstance from "../axios";
import {defineNuxtPlugin, useRuntimeConfig} from "nuxt/app";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const superAxios = superAxiosInstance(config);
    return {
        provide: {
            axios: superAxios,
        },
    };
});
