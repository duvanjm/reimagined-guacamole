import axios from 'axios';
import '../assets/Login.css';
import React, { useState } from 'react';

function Register() {

  const [state, setState] = useState({ email: "", password: "", confirm_pwd: "" });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.email === "" || state.password === "" || state.confirm_pwd === "") {
      alert('Enter email and password');
    } if (state.password.length < 8) {
      alert('Password must be longer than 8 characters');
      return
    } if (state.password !== state.confirm_pwd) {
      alert('Password does not match');
    } else {
      const header = { 'Content-Type': 'application/json' };
      const req = { email: state.email, password: state.password };
      try{
        await axios.post('http://localhost:5000/users', req, { header: {header} })
          .then((res) => {
            if (res.status === 201) {
              setTimeout(() => {
                alert('User successfully created');
                window.location = '/login';
              }, 1);
              localStorage.getItem('email');
            }
        });
      } catch(e) {
        alert('User alredy exists!');
      }
    }
  }

  return (
    <section className="main sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="login-form">
            <h2 className="form-title">Register</h2>
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="register-form"
              id="login-form"
            >
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="confirm_pwd"
                  onChange={handleChange}
                  id="confirm_pwd"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group form-button">
                <input className="buttons"
                  type="submit"
                  name="signin"
                  id="signin"
                  value="Submit"
                />
              </div>
              <div id="mensaje"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
