import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './styles/index.scss'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider resetCSS theme={theme}>
    <App />
  </ChakraProvider>
)
