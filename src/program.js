import React from 'react'
import './program.css'
import Cards from './card'
import logo4 from './images/logos/logo4.png'
import logo3 from './images/logos/logo3.png'
import logo2 from './images/logos/logo2.png'
import logo1 from './images/logos/logo1.png'

function program() {
  return (

    <div id='program' >
     
      <div className='fill-white flex justify-around gap-[12vw] items-center pb-10 pt-[10vw] program-texts ' >

          <h1 className='text-[4vw] font-extrabold' >
            Explore Our Program
          </h1>

          <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44">
            <path d="m480 -80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z"/></svg>
      </div>

      <div id='cards' className='flex items-center gap-[2vw] justify-center flex-wrap'  >
          <Cards
            logo = {logo4}
            title="Boxing"
            description="Unleash your strength with our boxing program, where skill meets strength for an empowering fitness experience."
          />

          <Cards
            logo={logo2}
            title ="Fat Loss"
            description= "Transform your body with our tailored fat loss program, maximizing results and sculpting a leaner, healthier you."
          />

          <Cards
            logo={logo1}
            title="Physical Fitness"
            description="Elevate your overall physical well-being with our holistic program to curate a healthy lifestyle."
          />


          <Cards
            logo={logo3}
            title= "Weight Gain"
            description="Embark on a personalized weight gain journey with our program, that helps you achieve your desired physique."
          />

      </div>
</div>
    
  )
}

export default program