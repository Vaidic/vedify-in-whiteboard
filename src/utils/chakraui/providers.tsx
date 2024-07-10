'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import appTheme from '@/lib/chakraui/theme';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={appTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
