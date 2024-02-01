import React, {useState} from 'react'
import logoimg from './images/dumbbell.png'
import './navbar.css'

function Navbar() {

    const [navbar, setNavbar] = useState(false);

    const changeBg = () =>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }

        else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBg)

  return (
    <div>
        <div className={navbar? 'navbar active' : 'navbar' } id='navbar' >
            <div className='flex items-center justify-center gap-7' >
                <img src={logoimg} alt="" srcset="" width="50px"  />
                <h3 className='font-extrabold' >AB Fitness</h3>
            </div>

            <div>
                <ul className='flex gap-[2.5vw] text-[18px]' >
                    <a href="#"className='nav_link' ><li>Home</li></a>
                    <a href="#program"className='nav_link' ><li>Program</li></a>
                    <a href="#service"className='nav_link' ><li>Service</li></a>
                    <a href="#gallery"className='nav_link' ><li>Gallery</li></a>
                    <a href="#reviews"className='nav_link' ><li>Reviews</li></a>
                </ul>
            </div>

            <button className='join-btn' >
                Join Now
            </button>
        </div>
    </div>
  )
}


export default Navbar
