import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col   gap-8 justify-center">
        {/* Left Section */}
        <div className="flex flex-col gap-7 items-center justify-center">
          
          <p className="text-sm text-white mb-4 md:mb-0 max-w-lg">
            Thank you for considering IBUYE for your real estate needs. We look
            forward to hearing from you and assisting you on your real estate
            journey.
          </p>

          <div className="flex justify-center md:justify-end lg:justify-end">
          <button className="bg-white hover:bg-indigo-600 text-black font-semibold py-3 px-6 rounded-md transition duration-300">
            Get in touch <svg className="inline-block ml-2 w-4 h-4 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </button>
        </div>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex justify-center space-x-6 md:justify-start lg:justify-center">
          <a href="/about" className="text-gray-300 hover:text-white transition duration-300">
            About us
          </a>
          <a href="/services" className="text-gray-300 hover:text-white transition duration-300">
            Services
          </a>
          <a href="/projects" className="text-gray-300 hover:text-white transition duration-300">
            Projects
          </a>

          
          
          {/* Add more navigation links as needed */}
        </div>

    
        

        {/* Bottom Section - Social Icons and Copyright */}
        <div className="col-span-2 lg:col-span-4 flex gap-32 items-center justify-between mt-8 pt-4 border-t border-gray-800">
          <div className="flex space-x-4">
          <div className="text-2xl font-bold mb-4 md:mb-0 md:mr-8">
            <span className="text-indigo-500">I</span>buye
          </div>




            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.538V12h2.538V9.797c0-2.506 1.492-3.897 3.777-3.897 1.094.196 2.283.304 3.469.304V9h-2.098c-1.211 0-1.442.579-1.442 1.42v1.728h2.885l-.465 3.004h-2.42V21.878C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.796-1.562 2.169-2.707-.95.562-2.006.972-3.119 1.196-.94-.95-2.215-1.546-3.62-1.546-2.902 0-5.255 2.353-5.255 5.255 0 .414.049.815.139 1.191-4.365-.218-8.208-2.307-10.792-5.454.37.636.583 1.308.583 2.033 0 1.814-.92 3.428-2.31 4.368.107.015.212.03.316.046 1.633.333 3.379 1.292 4.609 2.023-.539-.017-1.107-.069-1.7-.202 0 1.586 1.135 2.901 2.651 3.209-.276.074-.566.114-.865.114-.21 0-.411-.021-.612-.059.416 1.299 1.624 2.245 3.055 2.304-1.122.88-2.54 1.407-4.077 1.407-.266 0-.526-.015-.78-.046 1.423.904 3.117 1.438 5.003 1.438 6.003 0 9.304-4.995 9.304-9.305 0-.143-.003-.283-.009-.423.635-.459 1.187-1.03 1.622-1.634z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.733.014 3.056.191.308.167.556.476.682.841.121.365.169.782.175 1.241l.006 4.43c.058.584.196.986.64.986h3.433c.635 0 1.014.497.925 1.11l-2.247 8.68c-.341.98-.928 1.646-1.238 1.754-.582.19-1.124-.004-1.615-.523a.814.814 0 0 1-.07-.766V14.8c0-1.797-.002-4.852-.008-7.83v-3.2a5.232 5.232 0 0 0-.091-.594c-.149-.679-.427-1.137-.777-1.39-.176-.129-.349-.194-.575-.216-.376-.041-.669-.078-.743-.115-.09-.036-.145-.067-.197-.093-.181-.089-.426-.157-.649-.194-.228-.038-.464-.061-.692-.061-.25 0-.496.025-.692.061-.228.037-.473.105-.652.194-.052.026-.107.057-.197.093-.073.037-.366.074-.74.115-.229.022-.402.087-.576.216-.35.253-.627.71-.776 1.39a5.232 5.232 0 0 0-.091.594v3.2c-.009 2.978-.01 6.033-.008 7.83v2.85a.814.814 0 0 1-.07.766c-.491.519-1.033.713-1.615.523-.31-.108-.898-.774-1.238-1.754l-2.247-8.68c-.089-.613.29-1.11.925-1.11h3.433c.444 0 .588-.402.64-.986l.006-4.43c.003-.46.048-.877.175-1.242.127-.365.375-.674.682-.841.323-.176.627-.19.95-.191h3.056zm.18 9.45c-1.484 0-2.542-1.208-2.542-2.69v-5.17h5.084v5.17c0 1.482-1.058 2.69-2.542 2.69z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
