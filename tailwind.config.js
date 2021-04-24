module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      backgroundImage: (theme) => ({
        "contact-pattern":
          "url(/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg)",
        "home-hero-pattern":
          "url(/assets/home/desktop/bg-pattern-hero-home.svg)",
      }),
      colors: {
        primary: {
          peach: "#E7816B",
          black: "#1D1C1E",
          white: "#FFFFFF",
        },
        secondary: {
          lightPeach: "#FFAD9B",
          darkGrey: "#333136",
          lightGrey: "#F1F3F5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
