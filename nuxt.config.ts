import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  debug: true,
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/devtools",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
