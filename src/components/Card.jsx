import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='mr-5 mb-2 bg-white text-black inline-block  p-6 rounded-lg text-center shadow-lg'>
        <img className='ml-8 h-32 w-32 rounded-full mb-3' src="{props.photo}" alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.user}{props.surname}</h1>
        <h2>{props.city}{props.age}</h2>
        <h3>{props.profession}</h3>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
      </div>
    </div>
  )
}

export default Card
