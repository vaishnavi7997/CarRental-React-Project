import axios from 'axios'
import React, {useEffect, useState} from 'react'


const ViewService = () => {
    const [services , setServices] = useState([]);
    const [service, setService] = useState({ name: "", description: "", price: "", category:""})
    useEffect(() => {
        axios.get(`http://localhost:5000/services`)
        .then((res) => setServices(res.data))
        .catch((err) => console.log(err));
    }, []);
    const deleteService = (sid) =>{
          axios.delete(`http://localhost:5000/services/${sid}`)
           .then(() => alert('Service Deleted'))
             .catch((err) => console.log(err))
    }
    const getOneRecord = (sid) => {
         axios.get(`http://localhost:5000/services/${sid}`)
         .then((res) => setService(res.data))
         .catch((err) => console.log(err))
    }
    const changeData = (e) => {
         setService({...service, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(service);
        axios.put(`http://localhost:5000/Cars/${service.id}`, service)
            .then(() => alert(`Service Updated`))
            .catch((err) => console.log(err));
    }
    const {name, description, price, category} = service;
    return(
                <div className='conatiner p-5 text-center'>
                    <h1>Services - {services.length}</h1>
                    <table className='table table-striped table-bordered'>
                       <thead>
                       <tr>
                            <th scope='col'>Service ID</th>
                            <th scope='col'>Service Name</th>
                            <th scope='col'>Service  description</th>
                            <th scope='col'>Service Price</th>
                            <th scope='col'>Service category</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                       </thead>
                           <tbody>
                                    {
                                        services.map((service, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{service.id}</td>
                                                    <td>{service.serviceName}</td>
                                                    <td>{service.description}</td>
                                                    <td>{service.price}</td>
                                                    <td>{service.category}</td>
                                                    <td>
                                                         <button onClick={() => getOneRecord(service.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteService(service.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                           </tbody>
                    </table>
                    <div className='modal fade' id='update'>
                            <div className='modal-dialog'>
                             <div className='modal-content'>
                                <div className='modal-header'>
                                    <h4 className='modal-title'>Update Service</h4>
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={submitHandler}>
                                        <input type='text' name='serviceName' value={name} onChange={changeData} placeholder='Service Name' className='form-control mb-3' />
                                        <input type='text' name='description' value={description} onChange={changeData} placeholder='Service Description' className='form-control mb-3' />
                                        <input type='text' name='price' value={price} onChange={changeData} placeholder='Service Price' className='form-control mb-3' />
                                        <input type='text' name='category' value={category} onChange={changeData} placeholder='Service Category' className='form-control mb-3' />
                                        <input type='submit' data-bs-dismiss='modal'  className='form-control mb-3' />
                                    </form>
                                </div>
                             </div>
                            </div>
                     </div>
                </div>
    )
}

export default ViewService