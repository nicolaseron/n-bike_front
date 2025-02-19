// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts', '@pinia/nuxt'],
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:8080'
        }
    },
    app: {
        baseURL: '/'
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) => tag.startsWith('swiper'),
        },
    },
    css: ['vue-toast-notification/dist/theme-default.css']
})