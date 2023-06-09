/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1344px',
      },
    },
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)",
        "background-dark": "#090b1c",
        "bg-ai":
          "linear-gradient(260deg, #3d67ff 0%, #9773ff 50%, #efceff 80%)",
      },
      backgroundColor: {
        "bg-dark-secundary": "#1c1f27",
      },
      fontFamily: {
        sans: "var(--font-roboto)",
        inter: "var(--font-inter)",
      },
      colors: {
        gray: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121215",
        },
        purple: {
          50: "#f3eefc",
          100: "#d8cbf7",
          200: "#c6b2f3",
          300: "#ab8eee",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#764fd0",
          700: "#5c3ea3",
          800: "#48307e",
          900: "#372560",
        },
        green: {
          50: "#e6fbef",
          100: "#b1f1ce",
          200: "#8cebb6",
          300: "#57e295",
          400: "#36dc81",
          500: "#04d361",
          600: "#04c058",
          700: "#039645",
          800: "#027435",
          900: "#025929",
        },
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
};
