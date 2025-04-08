import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [login,setLogin] = useContext(loginStatus)
    const [details , setdetails] = useState({ username: "", password:"" })
    const changeData = (e) => {
        setdetails({...details, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(details);
        const { username, password } = details;

        //Login Check
        if (username === "admin"  && password === "admin" ) {
            setLogin(true)
            navigate("/Dashboard")
        } 
        else {
            alert("Invalid Credentials")
        }
    }
  return (
    <div className='container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Username' name='username' onChange={changeData} className='form-control mb-3'></input>
                <input type='password' placeholder='Password' name='password' onChange={changeData} className='form-control mb-3'></input>
                <input type='submit'  className='form-control mb-3'></input>
            </form>
        </div>
      
    </div>
  )
}

export default AdminLogin
