import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] leading-[5.5vw] flex items-center justify-center gap-2'>
    <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-10 pt-5 uppercase'>
      <Link className='text-[6vw] mt-6' to='../projects'>Projects</Link>
         </div>

      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-10 pt-5 uppercase '>
      <Link className='text-[6vw] mt-6' to='../overview'>Overview</Link>
        </div>

           </div> 
 
    
  )
}

export default HomeBottomText

