import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoReact, BiLogoJavascript} from 'react-icons/bi'
import {BsFillBootstrapFill, BsWordpress} from 'react-icons/bs'
import {SiStrapi} from 'react-icons/si'
import {IoLogoFirebase} from 'react-icons/io5'
import {AiFillGithub} from 'react-icons/ai'

function Skill() {
  return (
    <>
        <div className="skill">
            <div className="skillHeader">
                <h2>Tools And Technologies</h2>
            </div>


            <div className="allSkills">

                <h3>Technologies</h3>
                <div className="allTech">
                   <div className="allTechBox">
                    <div className="img">
                        <AiFillHtml5 />
                    </div>
                    <div className="name">
                        <p>HTML</p>
                    </div>
                   </div>
                   <div className="allTechBox">
                    <div className="img">
                        <BiLogoCss3 />
                    </div>
                    <div className="name">
                        <p>CSS</p>
                    </div>
                   </div>

                   <div className="allTechBox">
                    <div className="img">
                        <BsFillBootstrapFill />
                    </div>
                    <div className="name">
                        <p>Boostrap</p>
                    </div>
                   </div>

                   <div className="allTechBox">
                    <div className="img">
                        <BiLogoJavascript />
                    </div>
                    <div className="name">
                        <p>Javascript</p>
                    </div>
                   </div>

                   <div className="allTechBox">
                    <div className="img">
                        <BiLogoReact />
                    </div>
                    <div className="name">
                        <p>React</p>
                    </div>
                   </div>
                </div>

                <h3>Tools</h3>
                <div className="allTech">

                    <div className="allTechBox">
                        <div className="img">
                            <BsWordpress />
                        </div>
                        <div className="name">
                            <p>WordPress</p>
                        </div>
                    </div>

                    <div className="allTechBox">
                        <div className="img">
                            <SiStrapi />
                        </div>
                        <div className="name">
                            <p>Strapi</p>
                        </div>
                    </div>

                    <div className="allTechBox">
                        <div className="img">
                            <IoLogoFirebase />
                        </div>
                        <div className="name">
                            <p>Firebase</p>
                        </div>
                    </div>

                    <div className="allTechBox">
                        <div className="img">
                            <AiFillGithub />
                        </div>
                        <div className="name">
                            <p>GitHub</p>
                        </div>
                    </div>

                    

                </div>



            </div>

            {/* <div className="technologyDiv">
                <div className="techHead">
                    <h5>Web Design</h5>
                    <div className="techHeadList">
                        <div className="item">
                            <img src="" alt="" />
                            <div className="name">HTML</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    </>
  )
}

export default Skill