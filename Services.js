import axios from "axios";
import React, { useEffect, useState } from "react";


const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        axios(`http://localhost:5000/services`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    })
    
    return(
            <section className="container p-5">
                <h1 className="text-center fw-bolder text-danger">Our Services</h1>
                <p className="text-center text-muted">Reliable, Affordable, and Comfortable Rides</p>
                <div className="row">
                    {
                        data.map((ser) =>{
                            return(
                                <div className="col-md-6 col-lg-4">
                                    <div className="card mb-4 shadow-sm">
                                      <div className="card-body h-100">
                                        <h5 className="card-title">{ser.serviceName}</h5>
                                        <p className="card-text">{ser.description}</p>
                                        <p className="card-text fw-bold">{ser.category}</p>
                                      </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
    )
}

export default Services