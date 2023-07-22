import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


function Nav() {

  const [toggle, setToggle] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(()=>{
    // console.log(window.scrollY);
    window.addEventListener('scroll', ()=>{
      // console.log(window.scrollY);

      if(window.scrollY > 300){
        setScrolling(true)
      }else{
        setScrolling(false)
      }
    })

    // const listLink = document.querySelectorAll('.nav .links ul li')
    // listLink.forEach(link =>{
    //   link.addEventListener('click',()=>{
    //     setToggle(false)
    //   })
    // })

  },[])
  
  return (
    <>
      <div className={`nav ${scrolling ? "changeColor" : ""} `}>

        <div className="logo">
          <h3><Link to="/">K.M. AL-AMIN</Link></h3>
        </div>

        <div className="linkBars">
            <FaBars onClick={()=>setToggle(!toggle)} />
        </div>

        <div className={`links ${toggle ? 'openNav' : ''}`}>
          
            <ul>
              <li onClick={()=>setToggle(false)}><Link to="/">Home</Link></li>
              <li onClick={()=>setToggle(false)}><Link to="portfolio">Portfolio</Link></li>
              <li onClick={()=>setToggle(false)}><Link to="contact">Contact</Link></li>
              <li onClick={()=>setToggle(false)}><Link to="hire">Hire Me</Link></li>
            </ul>
          
        </div>



      </div>
    </>
  )
}

export default Nav