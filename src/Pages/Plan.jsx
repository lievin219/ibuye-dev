import React from 'react'
import { InlineWidget } from "react-calendly";

const Plan = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
        Schedule a Meeting
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Choose a time that works for you using the Calendly scheduler below. We look forward to meeting with you!
      </p>
      <div className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden bg-white p-4">
        <InlineWidget
          url="https://calendly.com/lievinm635/30min"
          styles={{ height: "600px" }}
        />
      </div>
    </div>
      
  )
}

export default Plan
