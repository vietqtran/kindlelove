import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface Props {
   title: string
   icon?: 'arrow'
   as?: 'button' | 'Link'
   href?: string
}

const Button = ({ icon, title, as = 'button', href }: Props) => {
   const Comp: React.ElementType = as === 'button' ? 'button' : Link
   return (
      <Comp
         {...(as === 'Link' ? { href } : {})}
         className='group duration-100 ease-linear hover:bg-[#5030016e]/10 flex font-ogg-regular text-lg border border-[#503101] w-fit text-[#503101] items-center gap-6 py-2 px-3'
      >
         {title}
         {icon === 'arrow' && (
            <Image
               className='group-hover:-translate-x-1 duration-100 ease-linear'
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
