import React from 'react'
import TrustedPartner from './TrustedPartner'
import WhyChooseIBuye from './WhyChooseIbuye'

const About = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-32">
        <TrustedPartner />
      </div>
      <WhyChooseIBuye /> {/* This stays outside the max-width container */}
    </div>
  )
}

export default About
