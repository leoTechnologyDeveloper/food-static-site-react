/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      backgroundImage: {
        back1: "url('/src/assets/back1.jpg')",
        back2: "url('/src/assets/hero/pexels-chan-walrus-941861.jpg')",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
