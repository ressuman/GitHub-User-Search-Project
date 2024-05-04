/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "lt-azure": "#0079ff",
      "lt-slate-gray": "#697c9a",
      "lt-queen-blue": "#4b6a9b",
      "lt-gun-metal": "#2b3442",
      "lt-ghost-white": "#f6f8ff",
      "lt-white": "#fefefe",
      "dk-azure": "#0079ff",
      "dk-white": "#ffffff",
      "dk-dark-gun-metal": "#141d2f",
      "dk-yankees-blue": "#1e2a47",
    },
    extend: {},
    fontFamily: {
      "space-mono-regular": ["Space Mono", "monospace"],
      "space-mono-bold": ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
