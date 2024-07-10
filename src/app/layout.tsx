import '@/styles/globals.css';
import { Providers } from '@/lib/chakraui/providers';
import { ChakraColorModeScript } from '@/lib/chakraui/colorModeScript';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/navbar';
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
            <Navbar />
            <div>{children}</div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
