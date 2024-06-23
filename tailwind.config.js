/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      azure: "#0079ff",
      "slate-gray": "#697c9a",
      "queen-blue": "#4b6a9b",
      "gun-metal": "#2b3442",
      "ghost-white": "#f6f8ff",
      "offset-white": "#fefefe",
      white: "#ffffff",
      "dark-gun-metal": "#141d2f",
      "yankees-blue": "#1e2a47",
      "tart-orange": "#f74646",
    },
    extend: {},
    fontFamily: {
      "space-mono-regular": ["Space Mono", "monospace"],
      "space-mono-bold": ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
