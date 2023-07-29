import React, { useEffect, useState } from 'react'
import PortfolioCard from '../components/layout/PortfolioCard'
import { Link } from 'react-router-dom'
import {  onSnapshot } from "firebase/firestore";
import { portFolioColRef } from '../config/firebase.config'

function Portfolio() {
  const [portfolio, setPortfolio] = useState(null)

  useEffect(()=>{
    const unsubscirbe = onSnapshot(portFolioColRef, snapshots=> {
      const allPortfolio = snapshots.docs.map(elm => {
        return{
          id: elm.id,
          ...elm.data()
        }
      })
      setPortfolio(allPortfolio)
    })
    return ()=>{
      unsubscirbe()
    }
  },[])

  return (
    <>
      <div className="portDiv">

        <div className="portHeader">
          <h2>My All Works</h2>
        </div>

        <div className="portCards">
          {
            portfolio && 
            (
              portfolio.map((elm, i) => <PortfolioCard key={i} elm={elm} />
              )
            )
          }
          
          
        </div>


        <div className="portHeader">
          <h2>My Running Work ....</h2>
        </div>

        <div className="portCards">
          <h3>Will be update soon</h3>
        </div>

      </div>
    </>
  )
}

export default Portfolio