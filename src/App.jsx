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


{/* This is a useEffect example*/}
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


import React from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
    console.log(e.target[0].value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='namebox' type="text" placeholder='Enter your Name'/>
        <button className='btn'>Submit</button>
      </form>
      
    </div>
  )
}

export default App
