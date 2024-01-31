import React from 'react'
import './section1.css'
import mainimg from './images/sectionbg.jpg'
import img1 from './images/coaching.png'
import img2 from './images/video.png'
import img3 from './images/management.png'
import gallery1 from './images/gallery/img1.jpg'
import gallery2 from './images/gallery/img2.jpg'
import gallery3 from './images/gallery/img3.jpg'
import gallery4 from './images/gallery/img4.jpg'
import gallery5 from './images/gallery/img5.jpg'
import gallery6 from './images/gallery/img6.jpg'



function section1() {
  return (
    <div className=' text-white h-[100vh] ' id='service' >
      <div className='flex justify-center gap-[3.5rem] flex-wrap items-center pb-10' >  
        <div className='w-[50%] flex flex-col text-center gap-4 ' >
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

          <div className='flex flex-row-reverse gap-4 rounded-[10px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Personal trainer</h2>
              <p className='text-[1em]' >Unlock your potential with our expert Personal Trainers</p>
            </div>
            <img src={img1} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[10px] ' />
          </div>

          <div className='flex flex-row-reverse gap-4 rounded-[10px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Practice Sessions</h2>
              <p>Elevate your fitness with practice sessions</p>
            </div>
            <img src={img2} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[10px] ' />
          </div>

          <div className='flex flex-row-reverse gap-4 rounded-[10px] bg-[#17181a] p-4 ' >
            <div>
              <h2 className='text-[1.5vw] font-extrabold ' >Good Management</h2>
              <p>Supportive management for your fitness success</p>
            </div>
            <img src={img3} alt="" className='bg-[#d28e41] p-1  w-[70px] rounded-[10px] ' />
          </div>


      </div>

      <div className='sectioncards ' id='gallery' >
        <h1>Gallery</h1>
        <h3>- Our Remarkable Achievements and Our Gym Family -</h3>
        <div className='gallerycards' >
            <img src={gallery1} alt="" />
            <img src={gallery4} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery5} alt="" />
            <img src={gallery6} alt="" />

        </div>
      </div>
      

</div>
  )
}

export default section1