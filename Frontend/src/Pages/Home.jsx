import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeatureStrip from '../Components/FeatureStrip'
import AgricultureStats from '../Components/AgricultureStats'
import Whatwedo from '../Components/Whatwedo';
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureStrip/>
      <AgricultureStats />
      <Whatwedo/>
    </div>
  )
}

export default Home;