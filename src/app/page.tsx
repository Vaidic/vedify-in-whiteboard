'use client';

import Whiteboard from '@/components/whiteboard';
import { Box, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Whiteboard roomId={'123'} />
    </Box>
  );
}
