import React from 'react'
import './program.css'

function card({logo, title, description}) {
  return (
    <div className='bg-[#1f2125] h-[350px] w-[350px] rounded-[25px] flex flex-col items-start justify-center p-4 gap-4 ' >
        <img src={logo} alt=""  width='60px' className='rounded-[15px] bg-[#f6ac54] p-2 ' />
        <h1 className='text-[2.5rem] font-extrabold ' >
            {title}
        </h1>

        <h3 className='text-[16px] pb-4 ' >
            {description}
        </h3>

        <button className='fill-white flex justify-center items-center gap-4 program-btn' >
            <h4 className='text-[20px]' >
                    Join Now
            </h4>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
    </div>

  )
}

export default card