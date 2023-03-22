# WITH Technologies NUXT3/Wagtail Proxy

This plug-in is mean to make work as a proxy between Wagtail
and Nuxt3. Making available the preview to use the preview of wagtail,
and render correctly the Vue3 components inside the website and the preview.

## Install process
To install these plug-in you have to with following command:

```bash
npm install @model-w/axios
```
This is going to add the plug-in to your `package.json`.

To use this module we need to add it to necessary to add it inside `nuxt.config.ts` as it's described above:
```javascript
    modules: ["~/plugins/axios"]
```
