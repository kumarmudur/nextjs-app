import { ReactNode } from "react";
import './globals.css';

export const metadata = {
  title: 'Next.js Todo App',
  description: 'Modern Todo App using Next.js',
};

export default function RootLayout({children}: Readonly<{ children: ReactNode}>) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}