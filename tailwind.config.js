/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-black": ['montserrat-black', 'sans-serif'],
        "montserrat-black-italic": ['montserrat-black-italic', 'sans-serif'],
        "montserrat-bold": ['montserrat-bold', 'sans-serif'],
        "montserrat-bold-italic": ['montserrat-bold-italic', 'sans-serif'],
        "montserrat-extrabold": ['montserrat-extrabold', 'sans-serif'],
        "montserrat-extrabold-italic": ['montserrat-extrabold-italic', 'sans-serif'],
        "montserrat-extralight": ['montserrat-extralight', 'sans-serif'],
        "montserrat-extralight-italic": ['montserrat-extralight-italic', 'sans-serif'],
        "montserrat-italic": ['montserrat-italic', 'sans-serif'],
        "montserrat-light": ['montserrat-light', 'sans-serif'],
        "montserrat-light-italic": ['montserrat-light-italic', 'sans-serif'],
        "montserrat-medium": ['montserrat-medium', 'sans-serif'],
        "montserrat-medium-italic": ['montserrat-medium-italic', 'sans-serif'],
        "montserrat-regular": ['montserrat-regular', 'sans-serif'],
        "montserrat-semibold": ['montserrat-semibold', 'sans-serif'],
        "montserrat-semibold-italic": ['montserrat-semibold-italic', 'sans-serif'],
        "montserrat-thin": ['montserrat-thin', 'sans-serif'],
        "montserrat-thin-italic": ['montserrat-thin-italic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

