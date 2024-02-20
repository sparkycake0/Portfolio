import tiktok from "./icons/tiktok.svg"
import instagram from "./icons/instagram.svg"
import telegram from "./icons/telegram.svg"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
export default function Footer() {
  return (
    <div className='flex relative bottom-0 justify-center items-center w-screen flex-col bg-secondary'>
        <h1 className='text-2xl border-b m-4'>WeCanHackNasa</h1>
        <div className="flex flex-row gap-3">
            <Link href={'/'}><Image className="border rounded-full p-1.5" src={tiktok} width={40}></Image></Link>
            <Link href={'/'}><Image className="border rounded-full p-1.5" src={instagram} width={40}></Image></Link>
            <Link href={'/'}><Image className="border rounded-full p-1.5" src={telegram} width={40}></Image></Link>
        </div>
        <p className='text-xs m-4'>©Copyright. All rights reserved</p>
        
    </div>
  )
}
