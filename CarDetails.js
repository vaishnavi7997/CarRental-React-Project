import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './SendEnquiry';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/Cars/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err))
    })
  return (
    <div className='container p-5'>
        <div className='row'>
            <div className='col-md-8'>
                <h2>{car.carName}</h2>
                <p>Price: &#8377;{car.price}/-</p>
                <p>Model:{car.model}</p>
                <p>Seater: {car.seater}</p>
                <p>Category: {car.category}</p>
                <p>Description: {car.description}</p>
            </div>
            <div className='col-md-4 shadow-lg p-3'>
                <h3 className='text-center'>Book Now</h3>
                <SendEnquiry />
            </div>
        </div>
    </div>
  )
}

export default CarDetails
