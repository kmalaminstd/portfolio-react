import React from 'react'
import Banner from '../components/layout/Banner'
import Counter from '../components/layout/Counter'
import FeaturePortfolio from '../components/layout/FeaturePortfolio'
import Skill from '../components/layout/Skill'
import Social from '../components/layout/Social'

function Home() {
  return (
    <>
      <Banner />
      <Counter />
      <FeaturePortfolio />
      <Skill />
      <Social />
    </>
  )
}

export default Home