import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

interface Props {
   children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
   return (
      <div className='min-h-screen w-full'>
         <Header />
         <main className='z-0 mx-auto mb-10 w-full max-w-[1440px] p-4 pt-20 xl:pt-[116px]'>
            {children}
         </main>
         <Footer />
      </div>
   )
}

export default RootLayout
