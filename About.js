import React from "react";
import Carrental from "./assets/car-rental.jpg";


const About = () => {
    return(
        
 <section className="container py-5">
    <div className="row">
        <div className="col-md-6">
            <img src = {Carrental} alt="Car Rental" className="w-100"/>
        </div>
        <div className="col-md-6">
            <h2 className="mb-4 text-danger">Who We Are</h2>
            <p>Welcome to <strong>Royal Wheels Car Rentals</strong>, your reliable partner in car rentals. Whether you're a traveler, business professional, or just need a vehicle for the weekend, we offer a fleet that matches your needs — from compact cars to luxury rides.</p>
            <h4 className="mt-4">Our Mission</h4>
            <p>To deliver effortless, affordable, and customer-first car rental experiences — so you can focus on the journey ahead.</p>
            <div className="md-4">
            <h4>Our Story</h4>
            <p>Established in <strong>2025</strong>, <strong>Royal Wheels Car Rentals</strong> began with a small fleet and a big vision: to make renting cars seamless and customer-friendly. Today, we proudly serve countless happy customers across the region, helping them drive with confidence.</p>
            <div className="md-6">
            <h4>Our Values</h4>
            <ul className="list-group m-4">
                <li>✅ Customer First: Your satisfaction drives us.</li>
                <li>✅ Quality Assurance: Well-maintained, clean, and reliable vehicles.</li>
                <li>✅ Flexibility: Rentals designed to fit your plans.</li>
                <li>✅ Transparency: No hidden charges, ever.</li>
            </ul>
        </div>
        </div>
        </div>
    </div>

    <div className="row mt-5  ">
        <div className="col-md-12">
            <h2 className="text-center mb-4 text-danger">Why Choose Us?</h2>
        </div>
        <div className="col-md-3 text-center">
            <div className="p-3 border rounded bg-white shadow-sm">
                <h5>🚗 Diverse Fleet</h5>
                <p>From economy to luxury, we have the right car for you.</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div className="p-3 border rounded bg-white shadow-sm">
                <h5>💰 Transparent Pricing</h5>
                <p>No hidden fees, just honest and upfront rates.</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div class="p-3 border rounded bg-white shadow-sm">
                <h5>📅 Flexible Rentals</h5>
                <p>Daily, weekly, or monthly — fit rentals into your schedule.</p>
            </div>
        </div>
        <div className="col-md-3 text-center">
            <div className="p-3 border rounded bg-white shadow-sm">
                <h5>⭐ 24/7 Support</h5>
                <p>We’re here anytime you need assistance.</p>
            </div>
        </div>
    </div>
</section>
    )
}

export default About;