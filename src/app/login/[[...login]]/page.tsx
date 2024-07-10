'use client';
import React from 'react';
import { Box, Flex, Image, useColorMode } from '@chakra-ui/react';
import { SignIn } from '@clerk/nextjs';
import { shadesOfPurple, neobrutalism } from '@clerk/themes';

const LoginPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex h="90vh" bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}>
      {/* Left side - Image */}
      <Box w="50%">
        <Image
          src="space-rocket.svg"
          alt="Login"
          objectFit="cover"
          w="100%"
          h="90%"
        />
      </Box>

      {/* Right side - Login Form */}
      <Flex w="50%" alignItems="center" justifyContent="center">
        <SignIn
          signUpUrl=""
          appearance={{
            baseTheme: colorMode === 'dark' ? shadesOfPurple : neobrutalism,
            elements: {
              footer: 'hidden',
              footerAction: { display: 'none' },
            },
          }}
        />
      </Flex>
    </Flex>
  );
};

export default LoginPage;
