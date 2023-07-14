import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


function Nav() {

  const [toggle, setToggle] = useState(false)
  
  return (
    <>
      <div className="nav">

        <div className="logo">
          <h3>K.M. AL-AMIN</h3>
        </div>

        <div className="linkBars">
            <FaBars onClick={()=>setToggle(!toggle)} />
        </div>

        <div className={`links ${toggle ? 'openNav' : ''}`}>
          
            <ul>
              <li><Link to="">Home</Link></li>
              <li><Link to="">Link</Link></li>
              <li><Link to="">Link</Link></li>
              <li><Link to="">Link</Link></li>
            </ul>
          
        </div>



      </div>
    </>
  )
}

export default Nav