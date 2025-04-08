import axios from "axios";
import Reac, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

const Cars  = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/Cars`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    })
    return(
        <section className="container p-5">
            <div className="text-center mb-4">
              <h1 className="text-danger">Our Cars {data.length}</h1>
              <p>Choose Your Ride — From Economy to Luxury</p>
            </div>
            <div className="row">
                {
                    data.map((car , index) => {
                        return(
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-center">{car.carName}</h5>
                                        <h5 className="card-text">Price: {car.price} /-</h5>
                                        <NavLink to={`/carDetails/${car.id}`}>
                                          <button className="btn btn-warning">Know More</button>
                                         </NavLink>
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

export default Cars