import type { Metadata } from 'next'
import { DM_Sans } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const dmsans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Anime Infinite List",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <main className='max-w-7xl mx-auto bg-[#0F1117]'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
