import defaultTheme from 'tailwindcss/defaultTheme'

// https://tailwindcss.com/docs/screens
const breakpoints = {
  xs: '496px', // => @media (min-width: 496px) { ... }
  ...defaultTheme?.screens,
  // sm: '600px', // => @media (min-width: 600px) { ... }
  // md: '960px', // => @media (min-width: 960px) { ... }
  // lg: '1280px', // => @media (min-width: 1280px) { ... }
  // xl: '1440px', // => @media (min-width: 1440px) { ... }
  // '2xl': '1920px', // => @media (min-width: 1920px) { ... }
}

export default breakpoints
