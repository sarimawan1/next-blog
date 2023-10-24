
import Footer from '@/componenets/Footer/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/componenets/Navbar/Navbar';
import { ThemeContextProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'My WEARIFY Brand!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
        <div className="container">
          <div className="wrapper">
          <Navbar/>
          {children}
          <Footer/>
          </div>
        </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
