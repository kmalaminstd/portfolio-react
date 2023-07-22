import React from 'react'
import Typewriter from 'typewriter-effect'
import { bannerPhoto, alamin } from '../../assets/images'
import { Link, NavLink } from 'react-router-dom'

function Banner() {
  return (
    <>
        <div className="banner">
          <div className="coverPhoto">
            <img src={`${bannerPhoto}`} alt="cover photo" />
          </div>
          <div className="singlePhoto">
            <div className="box1">
              <img src={`${alamin}`} alt="profile photo" />
            </div>
          </div>
          <div className="tagHeader">
            <h3>K.M. AL-AMIN</h3>
          </div>
          <div className="bigTyper">
            <h5>
              <span>I am a</span>
              <span>
                <Typewriter
                  options={{
                    strings: ['Web Designer.', 'Full Stact React Developer.'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </span>
            </h5>
          </div>
          <div className="singleBio">
            <p>Hello there! I'm <b>K.M. AL-AMIN</b>, a passionate Web Designer and Full Stack React Developer with a flair for creating stunning and functional web experiences. 
              <br />
              <br />
            I strive to craft engaging digital solutions that leave a lasting impact. I feel great in my ability to transform abstract concepts and ideas into visually appealing designs.  My experience in UI design allows me to create intuitive user interfaces.
                  <br />
                  <br />
            I have honed my skills as a Full Stack React Developer, making me proficient in both front-end and back-end technologies.
            On the server-side, I excel in building robust and secure back-end systems using Firebase and Strapi.
            
            <br /><br />
            
            I like to look forward to taking on new challenges and contributing to the ever-evolving landscape of web technology. </p>
          </div>

          <div className="hireBtn" style={{textAlign: "center"}}>
            <button><Link to="hire">Hire Me</Link></button>
          </div>
        </div>
    </>
  )
}

export default Banner