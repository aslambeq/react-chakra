import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import { useTheme } from '@chakra-ui/react'

const Header = () => {
  const theme = useTheme()
  const { colorMode, toggleColorMode } = useColorMode()

  console.log('theme : ', theme)

  return (
    <Box
      position='sticky'
      top={0}
      left={0}
      as='nav'
      w='100%'
      css={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'var(--chakra-colors-chakra-body-bg)'
      }}
      zIndex={2}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.xl'
        wrap='wrap'
        align='center'
        justify='space-between'
        css={{
          position: 'relative',
          '::before,::after': {
            position: 'absolute',
            content: "''",
            bottom: 'calc(-1 * (var(--chakra-radii-xl)))',
            width: 'var(--chakra-radii-xl)',
            height: 'var(--chakra-radii-xl)',
            zIndex: 1
          },
          '::before': {
            left: 0,
            background:
              'radial-gradient(circle at bottom right, transparent var(--chakra-radii-xl), var(--chakra-colors-chakra-body-bg) var(--chakra-radii-xl))'
          },
          '::after': {
            right: 0,
            background:
              'radial-gradient(circle at bottom left, transparent var(--chakra-radii-xl), var(--chakra-colors-chakra-body-bg) var(--chakra-radii-xl))'
          }
        }}
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            LOGO
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href='/works'>Works</Link>
          <Link href='/posts'>Posts</Link>
          <Link
            target='_blank'
            href='https://github.com/'
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <PhoneIcon />
            Source
          </Link>
        </Stack>

        <Box flex={1} align='right'>
          <Button onClick={toggleColorMode}>Toggle</Button>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <Link href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </Link>
                <Link href='/works' passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </Link>
                <Link href='/posts' passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </Link>
                <MenuItem as={Link} href='https://github.com/'>
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Header
