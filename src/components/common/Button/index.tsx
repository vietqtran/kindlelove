import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Props {
   title: string
   icon?: 'arrow'
   as?: 'button' | 'Link'
   href?: string
   className?: string
}

const Button = ({ icon, title, as = 'button', href, className }: Props) => {
   const Comp: React.ElementType = as === 'button' ? 'button' : Link
   return (
      <Comp
         {...(as === 'Link' ? { href } : {})}
         className={`font-ogg-regular group flex w-fit items-center gap-6 border border-[#503101] px-3 py-2 text-lg text-[#503101] duration-100 ease-linear hover:bg-[#5030016e]/10 ${className}`}
      >
         <div className='flex-1'>{title}</div>
         {icon === 'arrow' && (
            <Image
               className='duration-100 ease-linear group-hover:-translate-x-1'
               src='/images/icons/arrow-right.svg'
               alt='Spring Collection'
               width={24}
               height={24}
            />
         )}
      </Comp>
   )
}

export default Button
