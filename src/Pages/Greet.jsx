import React from 'react'
import Products from './Products'

const Greet = () => {

     function sayHell(){
      console.log( 'Muraho!')
     }
  return (
    <div className='flex flex-col mt-7'>
      <button onClick={sayHell}> Clickk me </button>
      <button>Clickk me </button>
      <button>Clickk me </button>
      <button>Clickk me </button>
      <button>Clickk me </button>
      <button onClick={sayHell}> Clickk me </button>
      <Products/>

    </div>
  )
}

export default Greet
