'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  Image,
  Avatar,
  Highlight,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import { appName, Links } from './config';
import Link from 'next/link';

const NavLink = ({ item }: { item: (typeof Links)[number] }) => {
  return (
    <Button
      as={'a'}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={item.url}
    >
      {item.name}
    </Button>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Link href="https://www.vedify.in">
              <Image src="logo.svg" alt="Logo" boxSize="4em" />
            </Link>
          </Box>
        </HStack>
        <Flex>
          <Highlight
            query={appName}
            styles={{
              p: '3',
              rounded: 'full',
              textColor: colorMode === 'light' ? 'black' : 'white',
              fontSize: '2xl',
              fontWeight: 'bold',
            }}
          >
            {appName}
          </Highlight>
        </Flex>
        <Flex alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} item={link} />
            ))}
          </HStack>
          <Box ml={2}>
            {showSearch ? (
              <Input placeholder="Search..." width="200px" mr={2} />
            ) : (
              <IconButton
                icon={<SearchIcon />}
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Search"
                mr={2}
              />
            )}
          </Box>
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            mr={2}
          />
          <SignedIn>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} bg="teal.500" />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <SignOutButton />
                </MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          </SignedIn>
          <SignedOut>
            <Button as={'a'} href="/login" rounded={'md'}>
              Login
            </Button>
          </SignedOut>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} item={link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
