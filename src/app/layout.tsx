import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 Launchpad - The Neon Luminary',
  description: 'Launch your protocol with the most advanced iridescent launchpad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
