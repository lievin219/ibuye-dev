import React from 'react'
// import assets from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
       <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      <h1>Ibuye</h1>
        <ul className='hidden md:flex gap-7 text-white'>
            <li href="" className='cursor-pointer hover:text-gray-400'><Link to='/home'> Home</Link></li>   
            <li href="" className='cursor-pointer hover:text-gray-400'><Link to='about'> About us</Link></li>  
            <li href="" className='cursor-pointer hover:text-gray-400'><Link to='whyrwanda'> Whyrwanda</Link></li>  
            <li href="" className='cursor-pointer hover:text-gray-400'><Link to='service'> Services</Link>s</li>  
           
            <li href="" className='cursor-pointer hover:text-gray-400'><Link to='portofolio'> Our portofolio</Link></li>
          
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Plan a meeting</button> 
       
       </div>
    </div>
    
  )
}

export default Navabar
 