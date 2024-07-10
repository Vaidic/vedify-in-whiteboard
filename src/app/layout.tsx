import '@/styles/globals.css';
import { Providers } from '@/lib/chakraui/providers';
import { ChakraColorModeScript } from '@/lib/chakraui/colorModeScript';
import { ClerkProvider } from '@clerk/nextjs';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ChakraColorModeScript />
          <Providers>
            <div>{children}</div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
