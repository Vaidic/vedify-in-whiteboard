'use client';

import { Button, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button onClick={toggleColorMode}>Button</Button>
    </div>
  );
}
