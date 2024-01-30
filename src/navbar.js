import React from 'react'
import logoimg from './images/main-logo.png'
import './navbar.css'

function navbar() {
  return (
    <div className='flex items-center justify-evenly pt-[3rem] pl-[2vw] pr-[2vw] text-white '>

        <div className='flex items-center justify-center' >
            <img src={logoimg} alt="" srcset="" width="50px"  />
            <h3>AB Fitness</h3>
        </div>

        <div>
            <ul className='flex gap-[2.5vw] text-[18px]' >
                <a href="#"className='nav_link' ><li>Home</li></a>
                <a href="#program"className='nav_link' ><li>Program</li></a>
                <a href="#service"className='nav_link' ><li>Service</li></a>
                <a href="#about"className='nav_link' ><li>About</li></a>
                <a href="#reviews"className='nav_link' ><li>Reviews</li></a>
            </ul>
        </div>

        <button className='join-btn' >
            Join Now
        </button>
    </div>
  )
}

export default navbar