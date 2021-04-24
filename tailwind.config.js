module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      pageHeight: "calc(100vh - 96px - 815px)",
    },
    extend: {
      screens: {
        xs: "320px",
      },
      backgroundImage: (theme) => ({
        "contact-pattern":
          "url(/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg)",
        "home-hero-pattern":
          "url(/assets/home/desktop/bg-pattern-hero-home.svg)",
        "web-design-card-bg":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/home/mobile/image-web-design.jpg)",
        "app-design-card-bg":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/home/mobile/image-app-design.jpg)",
        "graphic-design-card-bg":
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/home/mobile/image-graphic-design.jpg)",
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
