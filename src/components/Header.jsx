import React from 'react'
import Navabar from './Navabar'

const Header = () => {
  return ( 
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('./servicess.jpg')"}} id='Header'>
    <Navabar/>
    </div>
  )
}

export default Header
