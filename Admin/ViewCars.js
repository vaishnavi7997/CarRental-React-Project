import axios from 'axios'
import React, {useEffect, useState} from 'react'


const ViewCars = () => {
    const [Cars , setCars] = useState([]);
    const [Car, setCar] = useState({ carname: "", description: "", price: "", category:"", model:"", seater:""})
    useEffect(() => {
        axios.get(`http://localhost:5000/Cars`)
          .then((res) => setCars(res.data))
          .catch((err) => console.log(err))
      }, []);
    const deleteCar = (cid) =>{
          axios.delete(`http://localhost:5000/Cars/${cid}`)
              .then(() => alert('Car Deleted'))
              .catch((err) => console.log(err))
    }
    const getOneRecord = (sid) => {
         axios.get(`http://localhost:5000/Cars/${sid}`)
         .then((res) => setCar(res.data))
         .catch((err) => console.log(err))
    }
    const changeData = (e) => {
        setCar({...Car, [e.target.name]: e.target.value });
      };
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(Car);
        axios.put(`http://localhost:5000/Cars/${Car.id}`, Car)
            .then(() => alert(`Car Updated`))
            .catch((err) => console.log(err));
    }
    const { carName, description, price, category, model, seater } = Car;
    return(
                <div className='conatiner p-5 text-center'>
                    <h1>Cars- {Cars.length}</h1>
                    <table className='table table-striped table-bordered'>
                       <thead>
                       <tr>
                            <th scope='col'>Car ID</th>
                            <th scope='col'>Car Name</th>
                            <th scope='col'>Car description</th>
                            <th scope='col'>Car category</th>
                            <th scope='col'>Car Model</th>
                            <th scope='col'>Car Seater</th>
                            <th scope='col'>Car Price</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                       </thead>
                           <tbody>
                                    {
                                      Cars.map((car, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{car.id}</td>
                                                    <td>{car.carName}</td>
                                                    <td>{car.description}</td>
                                                    <td>{car.category}</td>
                                                    <td>{car.model}</td>
                                                    <td>{car.seater}</td>
                                                    <td>{car.price}</td>
                                                    <td>
                                                         <button onClick={() => getOneRecord(car.id)} data-bs-target='#update' data-bs-toggle='modal' className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => deleteCar(car.id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
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
                                    <h4 className='modal-title'>Update Cars</h4>
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={submitHandler}>
                                    <input type='text' name='carName' value={carName} onChange={changeData} placeholder='Car Name' className='form-control mb-3' />
                                    <input type='text' name='description' value={description} onChange={changeData} placeholder='Car Description' className='form-control mb-3' />
                                        <input type='text' name='price' value={price} onChange={changeData} placeholder='Car Price' className='form-control mb-3' />
                                        <input type='text' name='category' value={category} onChange={changeData} placeholder='Car Category' className='form-control mb-3' />
                                        <input type='text' name='model' value={model} onChange={changeData} placeholder='Car model' className='form-control mb-3' />
                                        <input type='text' name='seater' value={seater} onChange={changeData} placeholder='Car seater' className='form-control mb-3' />
                                        <input type='submit' data-bs-dismiss='modal'  className='form-control mb-3' />
                                    </form>
                                </div>
                             </div>
                            </div>
                     </div>
                </div>
    )
}

export default ViewCars