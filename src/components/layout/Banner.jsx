import React from 'react'
import Typewriter from 'typewriter-effect'
import { bannerPhoto, alamin } from '../../assets/images'

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
        </div>
    </>
  )
}

export default Banner