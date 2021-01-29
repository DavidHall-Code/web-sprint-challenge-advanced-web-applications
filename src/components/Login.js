import React, { useState } from 'react';
import axios from 'axios';

//set initState with i<3Lambd4
const initState = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
};

const Login = (props) => {
  const [form, setForm] = useState(initState);
  const { push } = props.history

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', form)
      .then((res) => {
        // console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload)
        push('/bubble-page')
        // when you have handled the token, navigate to the BubblePage route
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //// make a post request to retrieve a token from the api

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={submitHandler}>
          <label htmlFor='username'>
            <input
              type='text'
              id='username'
              placeholder='username'
              onChange={changeHandler}
              value={form.username}
            />
          </label>
          <label htmlFor='password'>
            <input
              type='text'
              id='password'
              placeholder='password'
              onChange={changeHandler}
              value={form.password}
            />
          </label>
          <button>Login</button>
        </form>
    </>
  );
};
  
export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT 'username' and 'password' RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.

