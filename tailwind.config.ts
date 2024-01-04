module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#111517',
        'secondary': '#848484',
        'bgLight': '#f2f2f2',
        'default': 'hsl(209, 23%, 22%)', // Dark Mode Elements
        'very-dark': 'hsl(207, 26%, 17%)', // Dark Mode Background
        'light-text': 'hsl(200, 15%, 8%)', // Light Mode Text
        darkGray: 'hsl(0, 0%, 52%)', // Light Mode Input
        veryLightGray: 'hsl(0, 0%, 98%)', // Light Mode Background
        white: 'hsl(0, 0%, 100%)' // Dark Mode Text & Light Mode Elements

      },
      width: {
        box1: 'calc(100% - 32px)',
        box2: 'calc(100% - 64px)'
      },
      fontFamily: {
        'body': ['"Nunito Sans"']
      }
    }
  },
  plugins: []
};