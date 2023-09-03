import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,  
  },
  shadows: {
    blue: "0 16px 24px 0 rgba(0, 132, 255, 0.4), 0 4px 6px 10px rgba(0, 132, 255, 0.2)",
  }
})
export default theme;