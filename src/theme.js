import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  disableTransitionOnChange: false
}

// const styles = {
//   global: {
//     body: {
//       transitionProperty: 'all',
//       transitionDuration: 'normal'
//     }
//   }
// }

const theme = extendTheme({ config })

export default theme
