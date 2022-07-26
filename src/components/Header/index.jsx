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

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
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
            href='https://github.com/craftzdog/craftzdog-homepage'
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
                <MenuItem
                  as={Link}
                  href='https://github.com/craftzdog/craftzdog-homepage'
                >
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
