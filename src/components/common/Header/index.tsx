'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
   const [isOpenMenu, setIsOpenMenu] = React.useState(false)
   const pathname = usePathname()
   useEffect(() => {
      setIsOpenMenu(false)
   }, [pathname])

   return (
      <header className='w-full border-b h-14 md:h-16 lg:h-20 xl:h-[116px] border-b-black'>
         <div className='xl:py-10 lg:px-[40px] md:px-[30px] xl:px-[60px] max-w-[1440px] size-full mx-auto'>
            <div className='flex relative justify-between items-center size-full'>
               <div className='md:flex hidden items-center lg:gap-[40px] xl:gap-[50px]'>
                  <Link
                     href={'/shop'}
                     className={`${
                        pathname === '/shop' && 'font-semibold'
                     } hover:font-semibold w-[78px] text-center cursor-pointer`}
                  >
                     SHOP
                  </Link>
                  <Link
                     href={'/about'}
                     className={`${
                        pathname === '/about' && 'font-semibold'
                     } hover:font-semibold w-[78px] text-center cursor-pointer`}
                  >
                     ABOUT
                  </Link>
                  <Link
                     href={'/contact'}
                     className={`${
                        pathname === '/contact' && 'font-semibold'
                     } hover:font-semibold w-[78px] text-center cursor-pointer`}
                  >
                     CONTACT
                  </Link>
               </div>
               <div className='md:flex hidden h-full items-center gap-[50px]'>
                  <div className='text-center cursor-pointer hover:font-semibold'>
                     <Image
                        className='min-w-6 min-h-6'
                        src={'/images/icons/search.svg'}
                        width={24}
                        height={24}
                        alt=''
                        loading='lazy'
                     />
                  </div>
                  <div className='text-center cursor-pointer hover:font-semibold'>
                     <Image
                        className='min-w-6 min-h-6'
                        src={'/images/icons/cart.svg'}
                        width={24}
                        height={24}
                        alt=''
                        loading='lazy'
                     />
                  </div>
                  <div className='text-center cursor-pointer hover:font-semibold'>
                     <Image
                        className='min-w-6 min-h-6'
                        src={'/images/icons/profile.svg'}
                        width={24}
                        height={24}
                        alt=''
                        loading='lazy'
                     />
                  </div>
               </div>
               <div
                  onClick={() => setIsOpenMenu(true)}
                  className='md:hidden p-4 text-center cursor-pointer hover:font-semibold'
               >
                  <Image
                     className='min-w-6 min-h-6'
                     src={'/images/icons/menu.svg'}
                     width={24}
                     height={24}
                     alt=''
                     loading='lazy'
                  />
               </div>
               <div className='md:hidden p-4 text-center cursor-pointer hover:font-semibold'>
                  <Image
                     className='min-w-6 min-h-6'
                     src={'/images/icons/cart.svg'}
                     width={24}
                     height={24}
                     alt=''
                     loading='lazy'
                  />
               </div>
               <Link
                  href={'/'}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
               >
                  <h2 className='font-bold text-2xl xl:text-[40px] lg:text-4xl text-[#503101]'>
                     KindleLove
                  </h2>
               </Link>
            </div>
         </div>

         <AnimatePresence>
            {isOpenMenu && (
               <div
                  onClick={() => setIsOpenMenu(false)}
                  className='fixed w-screen h-screen inset-0 bg-black/50'
               >
                  <motion.div
                     initial={{ x: '-100%' }}
                     animate={{ x: 0 }}
                     exit={{ x: '-100%' }}
                     transition={{ duration: 0.2 }}
                     onClick={(e) => e.stopPropagation()}
                     className='h-full relative w-[300px] bg-[var(--background)]'
                  >
                     <div
                        onClick={() => setIsOpenMenu(false)}
                        className='absolute p-2 top-0 right-0 z-10 cursor-pointer'
                     >
                        <Image
                           className='min-w-6 min-h-6'
                           src={'/images/icons/close.svg'}
                           width={32}
                           height={32}
                           alt=''
                           loading='lazy'
                        />
                     </div>
                     <div className='size-full relative py-10'>
                        <div className='w-full'>
                           <Link
                              href={'/shop'}
                              className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                                 pathname === '/shop' && 'font-semibold'
                              }`}
                           >
                              SHOP
                           </Link>
                           <Link
                              href={'/about'}
                              className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                                 pathname === '/about' && 'font-semibold'
                              }`}
                           >
                              ABOUT
                           </Link>
                           <Link
                              href={'/contact'}
                              className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                                 pathname === '/contact' && 'font-semibold'
                              }`}
                           >
                              CONTACT
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               </div>
            )}
         </AnimatePresence>
      </header>
   )
}

export default Header
