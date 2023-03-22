<template>
  <code>URL = {{ url }}</code>

  <h1>The README</h1>

  <pre>
    {{ readme }}
  </pre>
</template>

<script lang="ts">
  import {defineNuxtComponent} from "#app";

  export default defineNuxtComponent({
    async asyncData({ $axios }) {
      const url = '/ModelW/.github/main/profile/README.md'
      const readme = await $axios.$get(url)
      return { readme, url }
    },

    data() {
      return {
        readme: '',
        url: '',
      }
    }
  })
</script>
