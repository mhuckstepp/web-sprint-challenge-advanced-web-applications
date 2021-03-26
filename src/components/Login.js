import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });

  let history = useHistory();

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
        <form onSubmit={submitHandler}>
          <label>
            username
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={changeHandler}
            ></input>
          </label>
          <label>
            password
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={changeHandler}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
