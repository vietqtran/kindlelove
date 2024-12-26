import Button from '@/components/common/Button'
import { home_menu_products } from '@/constants/products'
import Image from 'next/image'

export default function Home() {
   return (
      <div className='flex flex-col gap-20 lg:py-10 lg:px-10'>
         {/* Spring Collection */}
         <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
            <div className='col-span-1 size-full'>
               <Image
                  src='/images/home/spring-collection.png'
                  alt='Spring Collection'
                  width={2000}
                  height={2000}
               />
            </div>
            <div className='size-full flex items-center justify-start'>
               <div className='flex flex-col gap-6 md:gap-10 lg:gap-16'>
                  <h2 className='font-ogg-regular tracking-wide text-6xl sm:text-7xl lg:text-8xl'>
                     Spring
                  </h2>
                  <h2 className='font-ogg-regular tracking-wide text-6xl sm:text-7xl lg:text-8xl'>
                     Collection
                  </h2>
                  <Button title='SHOP NOW' icon='arrow' />
               </div>
            </div>
         </div>

         {/* Our Menu */}
         <div className='w-full flex flex-col gap-8'>
            <h2 className='~text-3xl/5xl font-ogg-regular tracking-wider'>
               Our Menu
            </h2>
            <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
               {home_menu_products.map((p) => {
                  return (
                     <div className='w-full relative' key={p.id}>
                        <Image
                           className='aspect-square object-cover w-full h-[360px]'
                           src={p.image}
                           alt={p.name}
                           width={2000}
                           height={2000}
                        />
                        <div className='absolute text-white bottom-0 inset-x-0 bg-black/40 p-3'>
                           <div className='size-full text-center flex-col px-5 flex items-center justify-center gap-2'>
                              <p className='font-bold text-lg'>{p.name}</p>
                              <p className=''>{p.gif}</p>
                              <p className='font-bold text-lg'>
                                 {p.price.toLocaleString() + ' VND'}
                              </p>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>

         {/* Print hidden message */}
         <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
            <div className='col-span-1 size-full'>
               <Image
                  src='/images/home/print-hidden-message.png'
                  alt='Spring Collection'
                  width={2000}
                  height={2000}
               />
            </div>
            <div className='size-full flex items-start p-3 justify-start'>
               <div className='flex flex-col gap-10'>
                  <h2 className='font-ogg-regular tracking-wide text-5xl'>
                     Print hidden message
                  </h2>
                  <h3 className='font-ogg-regular tracking-wide text-2xl'>
                     Applicable to all products:{' '}
                     <span className='whitespace-nowrap'>+ 59,000 VND/jar</span>
                  </h3>
                  <Button title='PRINT NOW' icon='arrow' />
               </div>
            </div>
         </div>

         {/* About Us */}
         <div className='w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10'>
            <div className='md:col-span-7 order-2 md:order-1 col-span-6 flex items-start p-3 justify-start'>
               <div className='flex flex-col gap-10'>
                  <h2 className='font-ogg-regular tracking-wide text-5xl'>
                     About Us
                  </h2>
                  <h3 className='font-ogg-regular tracking-wide text-2xl'>
                     KindleLove is a premium scented candle line that not only
                     provides fragrance but also conveys a heartfelt message
                     through hidden, secret notes inside. Each candle is a
                     unique blend of natural essential oils, eco-friendly wax,
                     and meaningful messages, enhancing emotional connection
                     between the giver and receiver.
                  </h3>
                  <Button
                     as='Link'
                     href='/about'
                     title='READ MORE'
                     icon='arrow'
                  />
               </div>
            </div>
            <div className='col-span-6 order-1 md:order-2 md:col-span-5'>
               <Image
                  className='size-full object-cover'
                  src='/images/home/about-us.png'
                  alt='Spring Collection'
                  width={2000}
                  height={2000}
               />
            </div>
         </div>
      </div>
   )
}
