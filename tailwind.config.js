/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        colors: {
            'gray': {
                100: "#f3f3f3",
                200: "#d8d8d8",
                500: "#666666"
            },
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',
            blue: "#00a4fc",
            lightGray: "#f3f0f3",
            yellow: "#ffc107",
            pink:"#ff4952",
            red:"#ff0808"
        },
        screens: {
            'xs': '576px',
            'sm': '768px',
            's': '1024px',
            'm': '1280px',
            'l': '1536px',
            'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
        },
        extend: {},
    },
    plugins: [],
}

