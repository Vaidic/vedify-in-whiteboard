'use client';
import { ColorModeScript } from '@chakra-ui/react';
import todoAppTheme from '@/lib/chakraui/theme';

export function ChakraColorModeScript() {
  return (
    <ColorModeScript
      initialColorMode={todoAppTheme.config.initialColorMode}
      type={todoAppTheme.config.colorModeStorageType}
      storageKey={todoAppTheme.config.colorModeStorageKey}
    />
  );
}
