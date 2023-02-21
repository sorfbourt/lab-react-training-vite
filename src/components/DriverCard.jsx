import React from 'react'
import Rating from './Rating'

function DriverCard({name, rating, img, car}) {
  return (
    <div>
        <img width="40" src={img} alt={name}></img>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        {car.model} - {car.licensePlate}
    </div>
  )
}

export default DriverCard