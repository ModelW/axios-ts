# WITH Technologies NUXT3/Wagtail Proxy

This plug-in is mean to make work as a proxy between Wagtail
and Nuxt3. Making available the preview to use the preview of wagtail,
and render correctly the Vue3 components inside the website and the preview.

## Install process
To install these plug-in you have to with following command:

```bash
npm install proxy
```
This is going to add the plug-in to your `package.json`.

## Setup
To enable the plug-in to work properly with Nuxt3 you have to import it inside
you plugins directory in a file with the name `axios.ts`.

This is the code fragment necessary to allow to work the plugin:
```typescript
import axios_plugin from "axios";

export default defineNuxtPlugin(axios_plugin)
```

To use this plug-in you have to add it to the configuration of nuxt at 'nuxt.config.ts'
```javascript
    plugins: ["~/plugins/axios"]
```
