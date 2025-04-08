import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
     return(
         <header className= 'container-fluid'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                         <NavLink className="navbar-brand" to="/"><strong>Car<span className='text-danger'>Rental</span></strong></NavLink>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>
                              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ms-auto">
                                  <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                  <NavLink className="nav-link" to="/about">About</NavLink>
                                  <NavLink className="nav-link" to="/cars">Cars</NavLink>
                                  <NavLink className="nav-link" to="/services">Services</NavLink>
                                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </div>
                              </div>
                     </div>
             </nav>
         </header>
     )
}


export default Header
