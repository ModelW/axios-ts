# Usage
This is a little guide to use `@model-w/axios` inside a Nuxt3 component.
This guide is going to assume that you have followed the guide inside the [installation](installation.md).

## Usage in template
Using in `async` way, we can implement it by using on the `script` side of our `vue` templates.
Here is an example of a little implementation that works, 

```vue
<template>
  <p>url</p>
  <pre>data</pre>
</template>

<script lang="ts">
  export default defineNuxtComponent({
    async asyncData({ $axios }) {
      const url = "";
      const data = await $axios.$get(url);
      return { data, url };
    },
  
    data() {
      return {
        data: "",
        url: "",
      };
    },
  });
</script>

<style lang="css">

</style>
```

If you want to see it running you 
can click on this [link](https://codesandbox.io/p/sandbox/modelw-axios-nuxt3-rhbvek?file=%2Fpages%2Findex.vue).
