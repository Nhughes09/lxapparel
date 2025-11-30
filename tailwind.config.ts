/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                apple: {
                    blue: '#0071e3',
                    'blue-light': '#2997ff',
                    gray: {
                        50: '#f5f5f7',
                        100: '#fbfbfd',
                        200: '#e8e8ed',
                        800: '#1d1d1f',
                    },
                },
            },
            boxShadow: {
                'apple': '0 2px 10px rgba(0, 0, 0, 0.08)',
                'apple-lg': '0 12px 24px rgba(0, 0, 0, 0.12)',
                'apple-xl': ' 0 20px 40px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
