import { extendTheme } from '@chakra-ui/react';
import { fontConfig } from '@/lib/chakraui/fonts';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colorModeStorageType: 'localStorage',
  colorModeStorageKey: 'color-mode',
};

const appTheme = extendTheme({ config, fonts: fontConfig });

export default appTheme;
