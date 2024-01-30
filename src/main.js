import React from 'react'
import './main.css'
import Navbar from './navbar'
function main() {
  return (
    <section id='main' >
       <Navbar/>
        <div className='flex flex-col justify-center items-start gap-7'id='main-content' >
            <h4 className='text-[1.25vw] text-[#f6ac54] font-bold ' >Best Fitness Gym in Ghorahi</h4>
            <h1 className='text-[6vw] font-extrabold leading-[7vw] ' >BE YOUR<br /> BEST VERSION</h1>
            <h2>Embark on a fitness journey with us, where every 
                drop of sweat brings you closer to a stronger, healthier you. Join now and let's sculpt success together!</h2>
            <button className='btn' >Get Started</button>
        </div>      
    </section>
  )
}

export default main