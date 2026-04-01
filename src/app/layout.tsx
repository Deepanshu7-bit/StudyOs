import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactQueryProvider } from '@/lib/api/ReactQueryProvider';
import { EnvInitializer } from '@/lib/env/EnvInitializer';

export const metadata: Metadata = {
  title: 'StudyOS',
  description: 'Your study companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EnvInitializer />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
