import React, { useState } from 'react';
import '../assets/Login.css'
import axios from 'axios';

function Login() {

  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.email === "" || state.password === "") {
      alert('Enter email and password');
    } else {
      const str = `${state.email}:${state.password}`
      const encodeData = btoa(str);
      try {
        await axios.get('http://localhost:5000/connect', { headers: { 'Authorization': `Basic: ${encodeData}`} })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          window.location = "/dash";
        });
      } catch(e) {
        alert('Email or password invalid!');
      }
    }
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location = "/dash";
    } 
  }, []);

  return(
    <section className="main sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-form">
            <h2 className="form-title">Sign up</h2>
            <form
              method="GET"
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
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Log in"
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

export default Login;
