import React, { useEffect, useState } from "react";
import axios from "axios";
import {axiosWithAuth} from "../Utils/axiosWithAuth";
import {useHistory} from "react-router-dom";

const Login = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    // console.log('test handleSubmit')
    axiosWithAuth().post("/login", credentials)
    .then((res) =>{
        console.log("res from login", res)
        window.localStorage.setItem('token', res.data.payload)
        history.push("/bubblepage")
    })
    .catch((err) =>{
        console.log("Bad error with login", err)
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:
        <input 
        name="username"
        id="username"
        value={credentials.username}
        onChange={handleChange}
        ></input>
        </label>
        <label htmlFor="password">Password:
        <input 
        name="password"
        id="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
        ></input>
        </label>
        <button>Submit</button>
      </form>
      
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.