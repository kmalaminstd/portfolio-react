import React from 'react'
import { Link } from 'react-router-dom'
import { portPicOne, portPicThree, portPicTwo } from '../../assets/images'

function FeaturePortfolio() {
  return (
    <>
        <div className="featurePort">

            <div className="heading">
                <h2>My Portfolio</h2>
            </div>

            <div className="portfolioList">
                <div className="singleFeaturePort">
                    <div className="image">
                        <Link>
                            <img src={`${portPicOne}`} alt="" />
                        </Link>

                    </div>
                    <div className="overlayCard">
                        <div className="name">
                            <h3>Filter Menu</h3>
                        </div>
                        <div className="postDetails">
                            <Link>Details</Link>
                        </div>
                        <div className="link">
                            <Link to="https://kmalaminstd.github.io/FilterFoodMenu/" target="_blank">Live Preview</Link>
                        </div>
                    </div>
                </div>


                <div className="singleFeaturePort">
                    <div className="image">
                        <Link>
                            <img src={`${portPicTwo}`} alt="" />
                        </Link>

                    </div>
                    <div className="overlayCard">
                        <div className="name">
                            <h3>PSD to HTML</h3>
                        </div>
                        <div className="postDetails">
                            <Link to="https://kmalaminstd.github.io/firstpsd/" target="_blank">Details</Link>
                        </div>
                        <div className="link">
                            <Link>Live Preview</Link>
                        </div>
                    </div>
                </div>

                <div className="singleFeaturePort">
                    <div className="image">
                        <Link>
                            <img src={`${portPicThree}`} alt="" />
                        </Link>

                    </div>
                    <div className="overlayCard">
                        <div className="name">
                            <h3>Photo Gallery</h3>
                        </div>
                        <div className="postDetails">
                            <Link>Details</Link>
                        </div>
                        <div className="link">
                            <Link to="https://kmalaminstd.github.io/photogallery/" target="_blank">Live Preview</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="portBtn">
                <button><Link to="portfolio">See All Works</Link></button>
            </div>
        </div>
    </>
  )
}

export default FeaturePortfolio