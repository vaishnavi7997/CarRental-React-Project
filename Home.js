import React from "react";
import mainBanner from "./assets/banner.jpg"
import { NavLink } from "react-router-dom";

const Home  = ()  => {
    return(
          <section className="container p-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1><span className="text-dark fw-bolder">Royal Wheels Car Rentals</span>  <span className="text-muted ">-  Ready to Roll
                    Explore our fleet and hit the road with ease.</span></h1>
                    <p>At Royal Wheels Car Rentals, we believe renting a car should be as smooth as the ride itself. Whether you’re a traveler, a business professional, or just need a reliable car for the weekend, we’re here to make it easy, affordable, and enjoyable.</p>
                    <p>Founded in 2025, Royal Wheels Car Rentals started with a small selection of cars and a big vision: to make renting a car feel effortless. Today, we’ve grown into a trusted name in Hyderabad, known for our wide fleet, exceptional customer service, and transparent pricing. Whether it’s a quick city drive or a long adventure, we provide the right vehicle for your needs.</p>
                     <h6>🚘 Diverse Fleet:</h6>
                    <p> 🕒 Flexible Rentals:  Whether you need a car for a day, a week, or a month, we’ve got you covered.
                        🌟 Customer Focus:  We prioritize your comfort and convenience, every step of the way.
                    </p>
                    <NavLink to={`/about`} >
                    <button className="btn btn-danger mx-2">Know More</button>
                    </NavLink>
                    <NavLink to={`/contact`}>
                    <button className="btn btn-danger">Book a Car</button>
                    </NavLink>
                </div>
                <div className="col-lg-6">
                    <img src={mainBanner} alt="car rental" className="w-100 mainBanner mt-5"/>
                </div>

            </div>
          </section>
    )
}

export default Home