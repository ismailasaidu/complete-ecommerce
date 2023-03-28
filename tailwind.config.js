/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    values: {
      "100px": "100px",
    },
    flexGrow: {
      2: "2",
    },

    colors: {
      secondary: "#D6763C",
      white: "#ffffff",
      grey: "#555555",
      blue: "#024E82",
      black: "#1D1D1D",
      dark: "#000000",
      lightGrey: "#FBFBFB",
      divider: "#E8E8E8",
      darktext: "#3A3939",
      star: "#D6763C",
      back: "#EBEBEB",
      red:"#ff0000",
      icn:"#818181"
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1022px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 639px) { ... }

      // 'sm-landscape': {'raw': '(max-width: 639px) and (orientation: landscape)'},
    },

    // tailwind.config.js


    // screens: {
    //   // Landscape mode
    //   'sm-landscape': {'raw': '(max-width: 640px) and (orientation: landscape)'},
    //   'md-landscape': {'raw': '(max-width: 768px) and (orientation: landscape)'},
    //   'lg-landscape': {'raw': '(max-width: 1024px) and (orientation: landscape)'},
    //   'xl-landscape': {'raw': '(max-width: 1280px) and (orientation: landscape)'},
    //   '2xl-landscape': {'raw': '(max-width: 1536px) and (orientation: landscape)'},

    //   // Portrait mode
    //   'sm-portrait': {'raw': '(max-width: 640px) and (orientation: portrait)'},
    //   'md-portrait': {'raw': '(max-width: 768px) and (orientation: portrait)'},
    //   'lg-portrait': {'raw': '(max-width: 1024px) and (orientation: portrait)'},
    //   'xl-portrait': {'raw': '(max-width: 1280px) and (orientation: portrait)'},
    //   '2xl-portrait': {'raw': '(max-width: 1536px) and (orientation: portrait)'},
    // },




    fontFamily: {
      display: ["lato"],
    },

    backgroundImage: {
      heroImage: ["url(`./Assets/hero.png`)"],
    },
    variants: ["responsive", "active", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
