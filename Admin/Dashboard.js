import React, { useContext } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { loginStatus } from '../App'; 
import AdminLogin from "./AdminLogin"



const Dashboard = () => {
    const [login,setLogin] = useContext(loginStatus)
   if(login) {
    return(
        <section className="container-fluid ">
              <div className="row">
                 <aside className="col-lg-3">
                    <NavLink to={``}>
                    <button className="btn text-danger">Admin Dashboard</button>
                    </NavLink>
                <NavLink to={`addCar`}>
                    <button>Add Car</button>
                </NavLink>
                <NavLink to={`viewCars`}>
                    <button>View Cars</button>
                </NavLink>
                <NavLink to={`addService`}>
                     <button>Add Service</button>
                </NavLink>
                <NavLink to={`viewServices`}>
                     <button>View Services</button>
                </NavLink>
                <NavLink to={`viewEnquiries`}>
                      <button>View Enquiries</button>
                </NavLink>
               </aside>
               <div className="col-lg-9 d-flex justify-content-center align-items-center">
                 <Outlet />
               </div>
              </div>
        </section>
    )
   }
   else {
    return <AdminLogin />
   }

} 


export default Dashboard