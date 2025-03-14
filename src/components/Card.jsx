import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div>
        <h1>{props.user}{props.surname}</h1>
        <h2>{props.city}{props.age}</h2>
      </div>
    </div>
  )
}

export default Card
