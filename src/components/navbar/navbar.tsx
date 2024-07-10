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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';

const Links = [
  {
    name: 'Home',
    href: '/',
  },
];

const NavLink = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  <>{children}</>;
};

export default function Navbar() {
  return <></>;
}
