/** @type {import('tailwindcss').Config} */
export default {
    content: [
    ],
    theme: {
        colors: {
            'gray': {
                100 : "#f3f3f3",
                200 : "#d8d8d8",
            },
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
        },
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

