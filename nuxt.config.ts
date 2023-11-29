// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [         // Extend from an installed npm package
    'github:AlexGiovanni/nuxtLayers', // Extend from a git repository
  ]
})
