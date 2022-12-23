import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// styling
import '../style.css';

const SignIn = () => {
  const navigate = useNavigate()

    // states (Regiter; Login; Errors)

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role:True
    })
    

    const [errors, setErrors] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        
    })
    // ------------------------------------

    // handle onChange for registre inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }
     // -----------------------------------

    //=========================
    // when forms are submitted
    // ========================
    // Handle register form onSumbit 
    const registerHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/api/register", register, { withCredentials: true })
          .then(res => {
              console.log(res.data);
              setRegister({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
              })
              setErrors({
                  register: {
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      confirmPassword: ""
                  },
                  login: {
                      email: "",
                      password: ""
                  }
              })
              navigate("/")
          })
          .catch(err =>{

              setErrors({
                  ...errors,
                  register: err.response.data
              });
              console.log(err);

          } )
          

  }
  



  return (
    <div>
        <div className="container ">
            <div className="row mt-3">
                {/* Register Section */}
                <div className="form-comp cfb">
                    <h2>Register</h2>
                    <form className="sign-up-form cfb"  onSubmit={registerHandler}>
                        <div className="mb-3">
                            <label >First name</label>
                            <input name="firstName" onChange={handleRegisterChange} type="text" />
                        </div>

                        <div >
                            <label >Last name</label>
                            <input name="lastName" onChange={handleRegisterChange} type="text"/>
                        </div>

                        <div >
                            <label >Email address</label>
                            <input name="email" onChange={handleRegisterChange} type="email" />
                        </div>

                        <div >
                            <label >Password</label>
                            <input name="password" onChange={handleRegisterChange} type="password"  />
                        </div>

                        <div >
                            <label >Confirm password</label>
                            <input name="confirmPassword" onChange={handleRegisterChange} type="password"/>
                        </div>

                        <button type="submit">Register</button>
                        {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{JSON.stringify(value.message)}</p> : null) : null}
                    </form>
                </div>
                {/* // empty col div for spacing */}
                <div ></div>
                {/* Login Section */}
                </div>
            </div>
        </div>
    
)
}

export default SignIn;
