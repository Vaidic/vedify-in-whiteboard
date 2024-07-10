'use client';
import { ColorModeScript } from '@chakra-ui/react';
import appTheme from '@/lib/chakraui/theme';

export function ChakraColorModeScript() {
  return (
    <ColorModeScript
      initialColorMode={appTheme.config.initialColorMode}
      type={appTheme.config.colorModeStorageType}
      storageKey={appTheme.config.colorModeStorageKey}
    />
  );
}
