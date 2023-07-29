import React from 'react'
import { portPicOne } from '../../assets/images'
import { Link, useNavigate } from 'react-router-dom'

function PortfolioCard({elm}) {
    // const navigateLive = (liveLink)=>{
    //     <Link to={liveLink}></Link>
    // }

    console.log(elm);
    
  return (
    <>
    
        <div className="portfolioCard">
            <Link to={"https://kmalaminstd.github.io/FilterFoodMenu/"} target="_blank">
                <div className="tagMark">
                    <p>With {elm && elm.details.tag}</p>
                </div>
                <div className="portfolioImage">
                    <img src={portPicOne} alt="" />
                </div>
                <div className="portfilioTitle">
                    <h5> Filter Menu <span>(Filter Anything or any types of items)</span> </h5>
                </div>
            </Link>
        </div>
        
    </>
  )
}

export default PortfolioCard