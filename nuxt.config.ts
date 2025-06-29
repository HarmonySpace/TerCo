import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: "2024-09-05",
  vite: {    
    plugins: [      
      tailwindcss(),    
    ],  
  },
});
