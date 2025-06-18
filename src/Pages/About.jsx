import React from 'react'

import WhyChooseIBuye from './WhyChooseIbuye'
import AboutUs from './AboutUs'
import MissionVisionComponent from './MissionVisionComponent'

const About = () => {
  return (
  <>
  
       <AboutUs/>
<MissionVisionComponent/>
     
      <WhyChooseIBuye /> {/* This stays outside the max-width container */}
 </>
  )
}

export default About
