import React from 'react'
import { Link } from 'react-router-dom'
import {TbBrandFiverr} from 'react-icons/tb'
import {BsFacebook} from 'react-icons/bs'

function Hire() {
  // console.log(resume);
  return (
    <>
      <div className='hireDiv'>
        
        <div className="hireIntro">
          <h3>For You</h3>

          <p><b>Elevate Your Online Presence with Me...</b></p>
          <p>
            
            As a passionate and skilled web designer, I am here to make your digital dreams a reality and take your online presence to soaring heights.
          </p>
          <br />

          <p><b>A collaborate journey with you...</b></p>
          <p>Your website is an extension of your brand, and I am dedicated to understanding your unique vision and goals. From the moment we embark on this collaborative journey, your ideas and preferences will shape the design process.</p>
          <br />

          <p><b>Responsive And User-Friendly...</b></p>
          <p>In this mobile-centric era, responsive design is non-negotiable. Rest assured, your website will be optimized to adapt seamlessly to various devices, ensuring your visitors have a delightful experience whether they access your site from a desktop, tablet, or smartphone.</p>
          <br />

          <p><b>Creativity with functionality...</b></p>
          <p>Designing a website is not just about choosing colors and arranging elements. It is an art that requires a deep understanding of user behavior, an eye for aesthetics, and an unwavering commitment to delivering an exceptional user experience. I take great pride in blending creativity with functionality to craft websites that not only look breathtaking but also drive tangible results.</p>
          <br />

          <p><b>Let's Start...</b></p>
          <p>If you're ready to make a bold statement in the digital world, I am here to bring your vision to life. Whether you need a complete website overhaul or a fresh new design, I am passionate about making your online presence an unforgettable one. Let's connect today and embark on an exciting journey to transform your online identity. Together, we'll create a digital masterpiece that sets you apart from the crowd and drives your success to new heights.</p>


        </div>

        <div className="resumeLink">
          <button>
            <Link to="https://drive.google.com/file/d/1v2HhWMZ_FViTf9jX6KnMFHDLcsmDHz_l/view?usp=drive_link" target="_blank">
            See my resume
            </Link>
          </button>
        </div>

        <div className="hireLink">

          <h4>Hire me on ...</h4>

          <div className="box">
            <Link to="https://www.fiverr.com/km_alamin112">
              <div className="icon">
                <TbBrandFiverr />
              </div>
              <div className="iconName">
                <p>Fiverr</p>
              </div>
            </Link>
          </div>

          <h4 style={{marginTop: '20px'}}>Or Contact Me Trough</h4>          

          <div className="box">
            <Link to="https://www.fiverr.com/km_alamin112">
              <div className="icon">
                <BsFacebook />
              </div>
              <div className="iconName">
                <p>Facebook Page</p>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default Hire