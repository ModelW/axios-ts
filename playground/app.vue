<template>
  <h1>Example ({{ url }})</h1>

  <pre>
    {{ example }}
  </pre>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";
import { useAxios } from "#imports";

export default defineNuxtComponent({
  async asyncData() {
    const { $axios } = useAxios();
    const url = "https://example.org";
    const example = await $axios.$get(url);
    return { example, url };
  },

  data() {
    return {
      example: "",
      url: "",
    };
  },
});
</script>
