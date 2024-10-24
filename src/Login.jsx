import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
    const[Username,setUsername] = useState('');
    const[Password,setPassword] = useState('');
    const[errors,setErrors] = useState({Username:'',Password:''});

    const HandleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {Username:'',Password:''};
      let valid = true;
    

  if (Username === ""){
  newErrors.Username ='Username is required';
  valid = false;
  }

  if(Password === ""){
  newErrors.Password = 'Password is required'
  valid = false;
  }

  else if(Password.length<6) {
  newErrors.Password = 'Password must be atleast 6 characters long'
  valid = false;
  toast.error(newErrors.Password)
  }

          
  setErrors(newErrors);

  if(valid){
    toast.success('From submitted succesfully');
    console.log('Form submitted succesfully');
    window.location.href = '/For'
    
  }







    }
  return (

    <form onSubmit={HandleSubmit}>

   
    <div className='wrap'>
    
    <h1>Login form</h1>
    <p className='one'>Username</p>
    <input placeholder='enter your name' type='Username' value={Username} onChange={(e)=> setUsername(e.target.value)} required></input>

    <span>{errors.Username}</span>



    <p className='one'>Password</p>
    <input placeholder='enter your password' type='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} required></input><br></br>
    <span>{errors.Password}</span>

      <button className='btn'>submit</button>

    {/* <Link to ={'For'}><button className='two'>Submit</button></Link> */}

    {/* <h1>Hello</h1> */}
    <ToastContainer />
    </div>
    </form>
  )

}

export default Login