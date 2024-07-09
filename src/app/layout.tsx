import '@/styles/globals.css';
import { Providers } from '@/lib/chakraui/providers';
import { ChakraColorModeScript } from '@/lib/chakraui/colorModeScript';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraColorModeScript />
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
