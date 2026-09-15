import type { Metadata } from 'next';
import './globals.css';
import CustomScrollbar from '@/components/CustomScrollbar';

export const metadata: Metadata = {
  title: 'Miranda — Paper Portfolio',
  description: "Niccolò Miranda is an award-winning designer & developer passionate about creating iconic digital experiences through motion, typography and creative coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-ink antialiased selection:bg-ink selection:text-paper min-h-screen relative">
        {/* Authentic Multiplied Paper Grain Overlay */}
        <div className="paper-background" aria-hidden="true" />
        <CustomScrollbar />
        {children}
      </body>
    </html>
  );
}
