import React from 'react'
import {BsFacebook, BsGithub, BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Social() {
  return (
    <>
        <div className="social">
            <h2>Connect With Me</h2>

            <div className="allSocials">

                <div className="socialBox">
                   <Link to="https://www.facebook.com/kmalaminwd" target="_blank">
                        <div className="socialIcon">
                            <BsFacebook />
                        </div>
                        <div className="socialName">
                            <p>Facebook</p>
                        </div>
                   </Link>
                </div>

                <div className="socialBox">
                    <Link to="https://github.com/kmalaminstd" target="_blank">
                        <div className="socialIcon">
                            <BsGithub />
                        </div>
                        <div className="socialName">
                            <p>GitHub</p>
                        </div>
                    </Link>
                </div>

                <div className="socialBox">
                    <Link to="https://twitter.com/KMALAMI61039121" target="_blank">
                        <div className="socialIcon">
                            <BsTwitter />
                        </div>
                        <div className="socialName">
                            <p>Twitter</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    </>
  )
}

export default Social