import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const montserrat = Montserrat({
   variable: '--font-montserrat-sans',
   subsets: ['latin']
})

const oggRegular = localFont({
   variable: '--font-ogg-regular',
   src: '/fonts/Ogg-Regular.otf'
})

export const metadata: Metadata = {
   title: 'Kindle Love',
   description:
      'The project name is “KindleLove - Message Scented Candles”. The project name reflects part of the product image, which are unique scented candles. These candles not only bring a pleasant scent but also carry hidden messages of love, helping to connect emotions and spread positive emotions.'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en'>
         <body
            className={`${montserrat.variable} ${oggRegular.variable} antialiased`}
         >
            {children}
         </body>
      </html>
   )
}
