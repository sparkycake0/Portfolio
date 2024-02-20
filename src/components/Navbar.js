import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='flex items-center sticky justify-center top-0 w-screen gap-10 m-0 h-16 bg-opacity-50 backdrop-blur-sm bg-secondary'>
        <Link href={'/'}><button className='outline-none w-28 h-9 rounded bg-button bg-opacity-0 transition-all duration-150 hover:bg-opacity-50 drop-shadow-2xl'>About Us</button></Link>
        
        <Link href={'/projects'}><button className='outline-none w-28 h-9 rounded bg-button bg-opacity-0 transition-all duration-150 hover:bg-opacity-50 drop-shadow-2xl'>Projects</button></Link>
        <Link href={'/contact'}><button className='outline-none w-28 h-9 rounded bg-button bg-opacity-0 transition-all duration-150 hover:bg-opacity-50 drop-shadow-2xl'>Contact</button></Link>
    </div>
  )
}
