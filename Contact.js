import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (

    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6 p-5">
          <div className="shadow p-5 h-100">
            <SendEnquiry />
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <div className="shadow p-5 h-100">
          <p><i className="bi bi-telephone-fill"></i> +91 9823456712</p>
          <p><i className="bi bi-envelope-fill"></i> Carrental@gmail.com</p>
          <p><i className="bi bi-geo-alt-fill"></i> Hyderabad, Car-Rentals, Location</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60897.55478112424!2d78.32102465820316!3d17.4550625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f9dd09d9c9%3A0xf37c3f63691da2c4!2sLong%20Drive%20Cars!5e0!3m2!1sen!2sin!4v1743486208896!5m2!1sen!2sin"  width={250} height={250}  allowfullscreen="" ></iframe>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
