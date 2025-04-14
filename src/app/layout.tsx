import React from 'react';
import './global.css';
import 'aos/dist/aos.css'; // Import AOS styles

export const metadata = {
  title: 'VIXTERO - Global Trade Ecosystem Enabler',
  description: 'VIXTERO provides a comprehensive platform simplifying global and domestic trade.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
