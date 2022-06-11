/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
      backgroundImage: {
        "main-page": "url('/images/desktop/image-header.jpg')",
        "main-mobile": "url('/images/mobile/image-header.jpg')",
        cherry: "url('/images/desktop/image-graphic-design.jpg')",
        apple: "url('/images/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};
