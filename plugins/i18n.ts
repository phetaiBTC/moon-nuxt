// plugins/i18n.ts
import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'

import en from '~/locales/en.json'
import la from '~/locales/la.json'

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'la',
        fallbackLocale: 'en',
        messages: {
            en,
            la
        },
    })

    nuxtApp.vueApp.use(i18n)
})