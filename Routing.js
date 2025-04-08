import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Cars from "./Cars"
import Services from "./Services"
import Contact from "./Contact";
import NoPage from "./NoPage";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import AddCar from "./Admin/AddCar";
import ViewCars from "./Admin/ViewCars";
import AddService from "./Admin/AddService";
import ViewService from "./Admin/ViewService";
import ViewEnquiries from "./Admin/ViewEnquiries";
import Welcome from "./Admin/Welcome";
import CarDetails from "./CarDetails";

const Routing = () => {
   return(
       <Routes>
        <Route path='/Home' Component={Home} />
        <Route path='/About' Component={About} />
        <Route path='/Cars' Component={Cars} />
        <Route path='/carDetails/:id' Component={CarDetails} />
        <Route path='/Services' Component={Services} />
        <Route path='/Contact' Component={Contact} />
        <Route path='/admin' Component={AdminLogin} />
        <Route path='/dashboard' Component={Dashboard} >
         <Route path='' Component={Welcome} />
         <Route path="AddCar" Component={AddCar} />
         <Route path="viewCars" Component={ViewCars} />
         <Route path="addService" Component={AddService} />
         <Route path="ViewServices" Component={ViewService} />
         <Route path="ViewEnquiries" Component={ViewEnquiries} />
        </Route>
        <Route path='*' Component ={NoPage} />
       </Routes>
   )
}


export default Routing