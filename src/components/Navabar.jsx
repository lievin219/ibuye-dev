import React from 'react'
// import assets from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
       <div className='container mx-auto'>
        {/* <img src={assets.logo} alt="" /> */}
        <ul>
            <a href="" className='cursor-pointer hover:text-gray-400'><Link to='/home'> Home</Link></a>   
            <a href="" className='cursor-pointer hover:text-gray-400'><Link to='about'> About us</Link></a>  
            <a href="" className='cursor-pointer hover:text-gray-400'><Link to='whyrwanda'> Whyrwanda</Link></a>  
            <a href="" className='cursor-pointer hover:text-gray-400'><Link to='service'> Services</Link>s</a>  
           
            <a href="" className='cursor-pointer hover:text-gray-400'><Link to='portofolio'> Our portofolio</Link></a>
            <button className='hidden md:block bg-red px-8 py-2 rounded-full'>Plan a meeting</button> 
        </ul>
       
       </div>
    </div>
    
  )
}

export default Navabar
 