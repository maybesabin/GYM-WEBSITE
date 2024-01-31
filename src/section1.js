import React from 'react'
import './section1.css'
import mainimg from './images/sectionbg.jpg'
import img1 from './images/coaching.png'




function section1() {
  return (
    <div className=' text-white h-[100vh] ' id='service' >
      <div className='flex justify-center gap-[3.5rem] flex-wrap items-center pb-10' >  
        <div className='w-[40%] flex flex-col text-center gap-4 ' >
            <h1 className='text-[5vw] font-extrabold' >
              Why Join Us?
            </h1>

            <p className='text-[1.5vw] text-center'>
              Our diverse membership base creates a friendly and supportive
              atmosphere, where you can make freinds and stay motivated.
            </p>
        </div>
        
      </div>

      <div className=' flex justify-center items-center'>
        <img src={mainimg} className='w-[70vw] rounded-[25px] ' alt="" />
      </div>


      <div className='flex items-center  flex-wrap pt-10 justify-center gap-7' >

          <div className='flex flex-row-reverse gap-4 rounded-[15px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Personal trainer</h2>
              <p className='text-[1em]' >Unlock your potential with our expert Personal Trainers</p>
            </div>
            <img src={img1} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[15px] ' />
          </div>

          <div className='flex flex-row-reverse gap-4 rounded-[15px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Personal trainer</h2>
              <p>Unlock your potential with our expert Personal Trainers</p>
            </div>
            <img src={img1} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[15px] ' />
          </div>

          <div className='flex flex-row-reverse gap-4 rounded-[15px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Personal trainer</h2>
              <p>Unlock your potential with our expert Personal Trainers</p>
            </div>
            <img src={img1} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[15px] ' />
          </div>


      </div>


</div>
  )
}

export default section1