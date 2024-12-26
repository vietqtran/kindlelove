import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
   content: {
      files: [
         './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
         './src/components/**/*.{js,ts,jsx,tsx,mdx}',
         './src/app/**/*.{js,ts,jsx,tsx,mdx}'
      ],
      extract
   },
   theme: {
      screens,
      fontSize: {
         ...fontSize,
         '6xl': '4rem',
         '8xl': '6rem'
      },
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)'
         }
      }
   },
   plugins: [fluid]
} satisfies Config
