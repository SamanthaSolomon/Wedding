import { Meddon } from 'next/font/google'
import { Abhaya_Libre } from 'next/font/google'

export const meddon = Meddon({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const abhaya_libre = Abhaya_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
})
