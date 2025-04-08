import axios from 'axios'
import React, {useState} from 'react'

const AddCar = () => {
    const [car, setCars] = useState({})
    const changeData = (e) => {
        setCars({...car, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
       axios.post(`http://localhost:5000/Cars` , car)
       .then(() => alert("New Car Added"))
       .catch((err) => console.log(err))
    }
    return(
        <div className='container p-5'>
            <div className='col-lg-6 mx-auto'>
                <div className='shadow p-5'>
                    <h2 className='text-center mb-3'>Add Cars</h2>
                    <form onSubmit={submitHandler}>
                        <input type='text' name='carName' onChange={changeData} placeholder='Car Name' className='form-control mb-3'></input>
                        <input type='text' name='category' onChange={changeData} placeholder='Category' className='form-control mb-3'></input>
                        <input type='text' name='model' onChange={changeData} placeholder='Car Model' className='form-control mb-3'></input>
                        <input type='text' name='seater' onChange={changeData} placeholder='Car Seater' className='form-control mb-3'></input>
                        <input type='text' name='description' onChange={changeData} placeholder='Description' className='form-control mb-3'></input>
                        <input type='text' name='price' onChange={changeData} placeholder='price' className='form-control mb-3'></input>
                        <input type='submit' className='form-control mb-3'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddCar