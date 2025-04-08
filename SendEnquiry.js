import React, { Component } from 'react'

export default class SendEnquiry extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      mobile:"",
      bookingDate: "",
      email: "",
      car: "",
      service:"",
    }
  }
  changeDate = (e) => {
    // console.log(e.this.name , e.this.target.value);

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  changeName = (e) =>{
    this.setState({
      username: e.target.value
    })
  }
  submitHandler = (e) => {
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
      e.preventDefault();

      const alphaExp = /^[a-zA-Z\s]+$/;
      const numExp = /^[0-9]+$/;
      const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      console.log(this.state);
      //destructuring format

      const {username , mobile, email }   =   this.state;

      //Name validation
      if (username === "") {
        nameError.textContent = "Please Enter Your Name";
      }
      else {
        if(username.match(alphaExp)){
          nameError.textContent = "";
        }
        else {
          nameError.textContent = "Name should contain only alphabets";
        }
      }

      //Mobile validation 
      if(mobile === "") {
        mobileError.textContent = "Please Enter Mobile Number";
      }
      else {
        if(mobile.match(numExp)){
          if(mobile.length === 10) {
            mobileError.textContent = "";
          }
          else {
            mobileError.textContent = "Mobile number should be 10 digits only";
          }
        }
        else{
          mobileError.textContent = "Mobile number should contain only numbers";
        }
      }

      //email validation
      if(email === ""){
         emailError.textContent = "Please Enter  your Email";
      }
      else{
        if(email.match(emailExp)){
          emailError.textContent ="";
        }
        else {
          emailError.textContent = "Enter your correct email id";
        }   
      }     
  }



  render() {
    return (
      <form onSubmit={this.submitHandler}>
             <input type='text' name='username' onChange={this.changeName} placeholder='Enter Name' className="form-control mb-3"/>
             <p id='nameError'></p>
             <input type='text' name='mobile' onChange={this.changeDate} placeholder='Enter Mobile' className="form-control mb-3"/>
             <p id='mobileError'></p>
             <input type='date' name='bookingDate' onChange={this.changeDate} placeholder='' className="form-control mb-3"/>
             <input type='text' name='email' onChange={this.changeDate} placeholder='Email Address' className="form-control mb-3"/>
             <p id='emailError'></p>
             <select name='car' onChange={this.changeDate} className='form-control mb-3'>
                <option value={``} hidden>Select Car</option>
                <option value={`Toyota`}>Toyota Yaris</option>
                <option>Kia Carnival</option>
                <option>Honda Civic</option>
                <option>Suzuki Swift</option>
                <option>Toyota Fortuner</option>
                <option>Range Rover Sport</option>
                <option>Audi A6</option>
                <option>Skoda Superb</option>
                <option>Ford EcoSport</option>
                <option>Tesla Model X</option>
                <option>BMW X5</option>
                <option>Jeep Wrangler</option>
                <option>Maruti Suzuki Ertiga</option>
                <option>Nissan X-Trai</option>
                <option>Mercedes-Benz</option>
             </select>
             <select name='service' onChange={this.changeDate} className='form-control mb-3'>
              <option hidden>Choose a Service</option>
              <option>General Inquiries</option>
              <option>Booking Assistance</option>
              <option>Corporate & Long-Term Rentals</option>
              <option>Airport & City Transfers</option>
              <option>Chauffeur-Driven Services</option>
              <option>Wedding & Event Rentals</option>
              <option>Car Rental with Insurance</option>
              <option>Special Offers & Discounts</option>
             </select>
             <input type='submit' placeholder='' className="form-control mb-3"/>
      </form>
    )
  }
}
