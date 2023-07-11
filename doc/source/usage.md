# Usage

This is a little guide to use `@model-w/axios` inside a Nuxt3 component.
This guide is going to assume that you have followed the guide inside
the [installation](installation.md).

## As a composable

The recommended way of using this module is to use the provided composable:

```typescript
import {useAxios} from "@modelw/axios";

const {$axios} = useAxios();
const response = await $axios.get("/api/something"); // Get a response
const something = await $axios.$get("/api/something/"); // Get data directly
```

## As a classic plugin

```typescript
export default defineNuxtComponent({
  async asyncData({$axios}) {
    const something = await $axios.$get("/api/something/");
    return {something};
  },
});
```
