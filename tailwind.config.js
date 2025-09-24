/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      // Add this 'screens' object
      screens: {
        'md': '900px', // This forces Tailwind's md to match MUI's md
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}