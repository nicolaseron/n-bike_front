/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './error.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        screens: {
            'xs': '576px',
            's': '1024px',
            'm': '1280px',
            'l': '1536px',
            'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
        },
        extend: {},
    },
    plugins: [],
}

