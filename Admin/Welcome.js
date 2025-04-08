import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCallApi from './CallApi';

const Welcome = () => {
  const cars = useCallApi(`http://localhost:5000/Cars`);
  const services = useCallApi(`http://localhost:5000/services`);
  const enquires = useCallApi(`http://localhost:5000/enqueries`);
  return (
    <div>
      <h1 className='mb-4 h-100'>Welcome To Admin Dashboard</h1>
      <div className='row'>
       <div className='col-lg-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
            <h1 className='card-title'>{cars.length}+</h1>
            <h5 className='card-title'>Cars</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
            <h1 className='card-title'>{services.length}+</h1>
            <h5 className='card-title'>Services</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
            <h1 className='card-title'>{enquires.length}+</h1>
            <h5 className='card-title'>Enquiries</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
