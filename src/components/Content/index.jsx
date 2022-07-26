import { Box, Container, useColorMode } from '@chakra-ui/react'

const Content = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      maxW='container.xl'
      borderRadius="xl"
      padding="4"
      style={{
        marginTop: '12rem',
        height: '300vh'
      }}
      sx={{
        backgroundColor: colorMode === "dark" ? "gray.600" : "gray.300",
      }}
    >
      {children}
    </Container>
  )
}

export default Content
