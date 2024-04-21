/** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
        colors: {
            'blue': '#1814F3',
        },
        extend: {
            fontFamily: {
                'inter': ["Inter"],
            },
        }
    },
  plugins: [],
}

