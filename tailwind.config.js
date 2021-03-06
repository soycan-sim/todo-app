/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
            },
        },
        screens: {
            'tablet': '600px', // @media (min-width: 600px)
            'desktop': '1024px', // @media (min-width: 1024px)
        },
    },
    plugins: [],
}
