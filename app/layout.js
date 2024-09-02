import './globals.css'
import { Inter, Poppins, } from 'next/font/google'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Onariam',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
