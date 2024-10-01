/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      container : {
        center : true
      },
      colors : {
        primaryRed : "#F15757",
        secondYellow : "#F88E12",
        blueTert : "#1560F2",
        blackDark : "#1C1C1C",
        black : "#272727",
        white : "#FFFFFF",
        grey : "#BFBFC5"

      },
      fontFamily : {
        SpaceGrotesk : ["Space Grotesk"]
      },
     
    },

  },
  plugins: [],
}