import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
   return (
      <footer className='w-full mb-20'>
         <div className='p-3 w-full px-10 max-w-[1440px] mx-auto'>
            <div className='flex items-center mb-5 gap-5 md:gap-10'>
               <div className='h-[1px] flex-1 bg-black'></div>
               <h2 className='font-bold text-2xl xl:text-[40px] lg:text-4xl text-[#503101]'>
                  KindleLove
               </h2>
               <div className='h-[1px] flex-1 bg-black'></div>
            </div>
            <div className='w-full flex-col relative flex gap-5 items-start justify-between md:px-20'>
               <div className='w-full md:space-y-0 space-y-5 flex md:flex-row flex-col'>
                  <div className='flex items-start w-full justify-start md:gap-10'>
                     <div className='flex md:w-auto w-1/2 flex-col'>
                        <Link href={'#'} className='font-medium mb-2'>
                           SHOP
                        </Link>
                        <Link href={'#'}>CANDLE</Link>
                        <Link href={'#'}>GIFT SET</Link>
                        <Link href={'#'}>LIMITED EDITION</Link>
                        <Link href={'#'}>TOOL SET</Link>
                     </div>
                     <div className='flex flex-col'>
                        <Link href={'#'} className='font-medium mb-2'>
                           INFO
                        </Link>
                        <Link href={'#'}>ABOUT</Link>
                        <Link href={'#'}>EXCHANGES</Link>
                     </div>
                  </div>

                  <div className='flex w-full items-start justify-start md:justify-end md:gap-10'>
                     <div className='flex md:w-auto w-1/2 flex-col'>
                        <Link href={'#'} className='font-medium mb-2'>
                           CONTACT
                        </Link>
                        <Link href={'#'}>FACEBOOK</Link>
                        <Link href={'#'}>TIKTOK</Link>
                     </div>
                     <div className='flex flex-col'>
                        <Link href={'#'} className='font-medium mb-2'>
                           KINDLE LOVE
                        </Link>
                        <Link href={'#'}>FPT UNIVERSITY</Link>
                     </div>
                  </div>
               </div>
               <div className='lg:absolute pt-10 relative top-0 left-1/2 -translate-x-1/2 flex flex-col gap-4'>
                  <p className='text-center w-full max-w-64'>
                     Be the first to know about existing sale and new product.
                  </p>
                  <div className='relative flex border-b-black items-center justify-between border-b'>
                     <input
                        type='text'
                        className='w-full p-2 pl-0 bg-transparent focus:outline-none'
                        placeholder='E-mail'
                     />
                     <div className='cursor-pointer pl-2 py-2'>
                        <Image
                           src={'/images/icons/arrow-right.svg'}
                           width={16}
                           height={16}
                           alt=''
                           loading='lazy'
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
