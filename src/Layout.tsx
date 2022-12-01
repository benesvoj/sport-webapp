import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  FiBell,
  FiChevronDown,
  FiCompass,
  FiHome,
  FiMenu,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { Link, Outlet } from 'react-router-dom'
import { urls } from './utils/urls'
import React, { ReactNode } from 'react'

interface LinkItemProps {
  name: string
  url: string
  icon: IconType
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface NavItemProps extends FlexProps {
  icon: IconType
  link: string
  children: string | number
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: urls.apps.dashboard.title, icon: FiHome, url: urls.apps.dashboard.link },
  { name: urls.apps.competition.title, icon: FiTrendingUp, url: urls.apps.competition.link },
  { name: urls.apps.addressBook.title, icon: FiCompass, url: urls.apps.addressBook.link },
  { name: urls.apps.registerOffice.title, icon: FiStar, url: urls.apps.registerOffice.link },
  { name: urls.apps.settings.title, icon: FiSettings, url: urls.apps.settings.link },
]

export const Layout = ({ children }: { children?: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <VStack h='100%' w='100%'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} width='100%'>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size='full'
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobile navigation */}
        <MobileNav onOpen={onOpen} />

        <Box ml={{ base: 0, md: 60 }} p='4'>
          {children}
        </Box>

        <Box flex={1} paddingTop={4} paddingLeft={80} paddingRight={10}>
          <Outlet />
        </Box>
      </Box>
    </VStack>
  )
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          {urls.website.name}
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} link={link.url} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'} minWidth='max-content' gap='2'>
          <Box width='auto' p={4}>
            <Heading size='xl' variant='black'>
              Text
            </Heading>
          </Box>
          <Spacer width={'110vh'} />
          <IconButton size='lg' variant='ghost' aria-label='open menu' icon={<FiBell />} />
          <Menu>
            <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm'>Justina Clark</Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>

            {/*TODO: predelat na map*/}
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
