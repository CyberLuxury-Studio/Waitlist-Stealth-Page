import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: "TERMINAL_CONSTRUCT | Next Era Stealth",
  description: "Join the stealth beta. Limited access. Secure your node in the construct.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
