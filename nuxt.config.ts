// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL
    }
  },
  modules:['@pinia/nuxt']
})
