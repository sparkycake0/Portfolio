import React from 'react'
import Link from 'next/link'
export default function Pcard(props) {
  return (
    <div className='flex justify-center items-center flex-col text-center lg:flex-row lg:text-left  border-black rounded-2xl p-5 gap-10 w-4/5 mx-auto mb-20 bg-secondary2 bg-opacity-30'>
      <img src={props.img} alt="" className='w-max rounded-xl'/>
      <div className='flex flex-col gap-11'>
        <h1 className='text-8xl bg-gradient-to-r from-indigo-700 w-fit to-purple-800 text-transparent bg-clip-text'>{props.name}</h1>
        <h2 className='text-4xl '>{props.desc}</h2>
        <p className='text-xl '>Lorem ipsum dolor sit amet com nobis iure deleniti doloremque.</p>
        <div className='flex justify-center items-center'>
          <Link href={props.link} target='blank'><button className=' w-36 h-14 rounded-xl bg-button outline-none hover:bg-secondary'>Open Project</button></Link>
        </div>
      </div>
    </div>
  )
}
