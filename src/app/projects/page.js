import React from 'react'
import Pcard from './Pcard.js'
export default function page() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='m-10 text-2xl'> - All of out projects are here - </h1>
      <Pcard img='https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png' name='Youtube' desc='A Streaming Platform' link='https://youtube.com'/>
      <Pcard img='https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png' name='Youtube' desc='A Streaming Platform' link='https://youtube.com'/>
      <Pcard img='https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png' name='Youtube' desc='A Streaming Platform' link='https://youtube.com'/>
      <Pcard img='https://blog.hootsuite.com/wp-content/uploads/2023/05/How-to-Create-a-YouTube-Channel-03.png' name='Youtube' desc='A Streaming Platform' link='https://youtube.com'/>
    </div>
  )
}
