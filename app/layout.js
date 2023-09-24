import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Onariam',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  )
}
