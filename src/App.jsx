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

{/*This is a component example*/}

{/*


import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Footer />

    </>
  )
}

export default App

*/}

{/*This is a props card example*/}

{/*

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card user='DedSec' surname='Watchdog' city='Prayagraj' age={22} />
    </div>
  )
}

export default App

*/}


{/*This is a props card example with array*/}

{/*

import React from 'react'
import Card from './components/Card'

const users=[
  {
    "name": "Akash Verma",
    "city": "Delhi",
    "age": 28,
    "profession": "Software Engineer",
    "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Priya Sharma",
    "city": "Mumbai",
    "age": 24,
    "profession": "Graphic Designer",
    "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "name": "Rahul Gupta",
    "city": "Bangalore",
    "age": 30,
    "profession": "Data Analyst",
    "profile_picture": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name": "Neha Singh",
    "city": "Kolkata",
    "age": 26,
    "profession": "Content Writer",
    "profile_picture": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "name": "Vikram Mehta",
    "city": "Chennai",
    "age": 32,
    "profession": "Product Manager",
    "profile_picture": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]



const App = () => {
  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} photo={elem.photo}/>
        })}
      </div>
      
    </div>
  )
}

export default App


*/}

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    console.log('Data Fetched')
    const response =await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Help</button>
      <div className='p-5 bg-gray-950 text-white'>
        {data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img src={elem.download_url} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default App
