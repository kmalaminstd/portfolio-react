import React from 'react'
import PortfolioCard from '../components/layout/PortfolioCard'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <>
      <div className="portDiv">

        <div className="portHeader">
          <h2>My All Works</h2>
        </div>

        <div className="portCards">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>


        <div className="portHeader">
          <h2>My Running Work ....</h2>
        </div>

        <div className="portCards">
          <PortfolioCard />
        </div>

      </div>
    </>
  )
}

export default Portfolio