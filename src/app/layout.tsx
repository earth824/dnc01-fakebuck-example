import type { Metadata } from 'next';
import '@/styles/globals.css';
import { notoSans } from '@/styles/font';

export const metadata: Metadata = {
  title: { template: '%s | Fakebuck', default: 'Fakebuck' }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${notoSans.className}`}>{children}</body>
    </html>
  );
}
