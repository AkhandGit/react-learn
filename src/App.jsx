
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
