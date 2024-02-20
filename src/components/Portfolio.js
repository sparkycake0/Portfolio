import React from 'react'
import './portfolio.css'
export default function () {
  return (
    <div className='sm:flex flex-col p-20 items-center h-screen -m-16 justify-center gap-24'>
        <div className='flex flex-col text-center gap-6 justify-center border-b-4 border-white p-12 border-opacity-30'>
            <h1 className='drop-shadow-xl   text-9xl font-bold text-button bg-gradient-to-r from-indigo-700 to-purple-800 text-transparent bg-clip-text'>WeCanHackNasa</h1>
            <h1 className='text-4xl drop-shadow-xl w-max'>Fullstack Web Developers <span className='underscore'>_</span></h1>
        </div>
        <div className='flex items-center rounded p-10 text-xl max-w-5xl bg-opacity-20 backdrop-blur-sm bg-secondary2'>
            <p>WeCanHackNasa aka Luka Dimitrijevic and Ognjen Rajkovic. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aspernatur fuga facere, molestias neque corrupti ea sunt reiciendis, ex praesentium porro dolores accusamus, veniam minima ullam. Veritatis ex distinctio itaque? </p>
        </div>
                
    </div>
  )
}
