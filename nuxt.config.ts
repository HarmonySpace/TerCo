// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
},
})
