import axios from 'axios'
import React, {useState} from 'react'

const AddService = () => {
    const [service, setService] = useState({})
    const changeData = (e) => {
        setService({...service, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
       axios.post(`http://localhost:5000/Cars` , service)
       .then(() => alert("New service Added"))
       .catch((err) => console.log(err))
    }
    return(
        <div className='container p-5'>
            <div className='col-lg-6 mx-auto'>
                <div className='shadow p-5'>
                    <h2 className='text-center mb-3'>Add Service</h2>
                    <form onSubmit={submitHandler}>
                        <input type='text' name='serviceName' onChange={changeData} placeholder='Service Name' className='form-control mb-3'></input>
                        <input type='text' name='category' onChange={changeData} placeholder='category' className='form-control mb-3'></input>
                        <input type='text' name='descriptione' onChange={changeData} placeholder='descriptione' className='form-control mb-3'></input>
                        <input type='text' name='price' onChange={changeData} placeholder='price' className='form-control mb-3'></input>
                        <input type='submit' className='form-control mb-3'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddService