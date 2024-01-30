import React from 'react'
import './section1.css'
import mainimg from './images/sectionbg.jpg'

function section1() {
  return (
    <div className=' text-white' id='service' >
      <div className='flex justify-center gap-[3.5rem] items-center  h-[100vh]' >  
        <div className='w-[40%] flex flex-col text-left gap-4 ' >
          <h1 className='text-[5vw] font-extrabold' >
            Why Join Us?
          </h1>

          <p className='text-[1.5vw] text-left'>
            Our diverse membership base creates a friendly and supportive
            atmosphere, where you can make freinds and stay motivated.
          </p>
        </div>
        <img src={mainimg} className='w-[730px] rounded-[25px] ' alt="" />

        <div className='service-cards'>

          
          
        </div>
      </div>
    </div>
  )
}

export default section1