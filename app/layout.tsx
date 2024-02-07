import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stock Tracker',
  description: 'Stock tracker IOT project management interface',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} h-fit bg-neutral-100 transition-transform duration-100 ease-linear`}
      >
        {children}
      </body>
    </html>
  );
}
