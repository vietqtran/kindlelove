import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

interface Props {
   children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
   return (
      <div className='w-full min-h-screen relative'>
         <div id='portal'></div>
         <Header />
         <main className='w-full max-w-[1440px] mx-auto p-4 mb-10'>
            {children}
         </main>
         <Footer />
      </div>
   )
}

export default RootLayout
