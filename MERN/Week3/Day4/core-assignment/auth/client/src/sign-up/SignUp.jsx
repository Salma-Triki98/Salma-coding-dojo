import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// styling
import '../style.css';

const SignUp = () => {
  const navigate = useNavigate()
    // states (Regiter; Login; Errors)
    
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        
        login: {
            email: "",
            password: ""
        }
    })
    // ------------------------------------


    // handle onChange for login inputs
    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    // -----------------------------------

    //=========================
    // when forms are submitted
    // ========================
            

    
    // Handle login form onSumbit
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", login, { withCredentials: true })
            .then(res => {
                console.log("Cookie be like", document.cookie);
                console.log("Data be like", res.data);
                navigate('/movies');
            })
            .catch(err =>
                {
                    setErrors( {...errors, login: err.response.data})
                    console.log(err.response.data);
                })


    }

  


    return (
      <div>
          <div className="container ">
              <div className="row mt-3">
                  {/* Login Section */}
                  <div className="form-comp cfb">
                      <h2>Login</h2>
                      <form className="sign-up-form cfb" onSubmit={loginHandler}>
                          <div className="mb-3">
                              <label className="form-label">Email address</label>
                              <input name="email" onChange={handleLoginChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else 😅</div>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Password</label>
                              <input name="password" onChange={handleLoginChange} type="password" className="form-control" id="exampleInputPassword1" />
                          </div>

                          <button type="submit" className="btn btn-primary">Login</button>
                          {errors.login ? Object.entries(errors.login).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{value}</p> : null) : null}
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SignUp;
