{/*This was a useState example*/}

{/*
import React, { useState } from 'react'


const App = () => {


const [a, setA] = useState('Ankit')

const handleClick = () => {
  setA("Akhand")
  console.log(a)
  }

  return (
    <div>
      <h1>GoodDay {a}</h1>
      <button onClick={handleClick}>Click</button>
      
    </div>
  )

}



export default App

*/}


{/* This is a normal example*/}
{/*


import React from 'react'

const App = () => {
  return (
    <div>
      <h2 className='text-5xl bg-pink-700'>Hello Jerry</h2>
    </div>
  )
}

export default App


*/}


{/*This is Two Way Binding example*/}

{/*

import React, { useState } from 'react';


const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
    console.log(Username)
    setUsername('')
    
  }

  const [Username, setUsername] = useState('')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={Username} onChange={(e)=>{
          setUsername(e.target.value)
        }} className='namebox' type="text" placeholder='Enter your Name'/>
        <button className='btn'>Submit</button>
      </form>
      
    </div>
  )
}

export default App


*/}

import React from 'react'

const App = () => {
  return (
    <>
    <nav className='navbar'>
      <h2>React-Learning</h2>
      <div>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>Your Account</h4>
      </div>
    </nav>

    </>
  )
}

export default App
