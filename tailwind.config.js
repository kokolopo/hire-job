const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#E5E5E5",
        backgroundInput: "#FFFFFF",

        primaryColor: "#5E50A1",
        secondaryColor: "#FBB017",
        tertiaryColor: "#E2E5ED",

        primaryText: "#1F2A36",
        secondaryText: "#46505C",
        tertiaryText: "#FFFFFF",
      },
      listStyleImage: {
        checkmark: "url('/public/images/checklistLogo.svg')",
      },
      backgroundImage: {
        authBG: "url('/public/images/heroImage.png')",
      },
    },
  },
  plugins: [],
});
