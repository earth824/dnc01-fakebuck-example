import type { Metadata } from 'next';
import '@/styles/globals.css';
import { notoSans } from '@/styles/font';
import { Toaster } from '@/components/ui/sonner';

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
      <body className={`antialiased ${notoSans.className}`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
