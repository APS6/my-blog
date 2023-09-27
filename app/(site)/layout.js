import './globals.css'
import Nav from '@/components/nav'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Anirudha's Blog",
  description: "Anirudha Pratap Sah's personal Web Development blogs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#050506] text-[#eeeeee]'>
      <Nav />
      <main className="w-full max-w-4xl m-auto px-5 pt-20">
        {children}
        <Analytics />
        </main>
        </body>
    </html>
  )
}
