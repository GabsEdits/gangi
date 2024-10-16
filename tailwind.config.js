/** @type {import('npm:tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "800px" },
    },
    extend: {},
  },
  plugins: [],
};
