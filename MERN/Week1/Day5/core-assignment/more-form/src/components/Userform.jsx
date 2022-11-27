import React, {useState} from 'react'

const Userform = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");  
    const [confirmpasswordError, setConfirmpasswordError] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,firstnameError, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        } 
        const handlename= (e) => {
            setFirstname(e.target.value);
            if(e.target.value.length < 2) {
                setFirstnameError("First name must be at least 2 characters");
            }
            else{
                setFirstnameError("")
            }
    };
    const handlelastname= (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters");
        }
        else{
            setLastnameError("")
        }
};
const handleemail= (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 5) {
        setEmailError("The Email must be at least 5 characters");
    }
    else{
        setEmailError("")
    }
};
const handlepassword= (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPasswordError("The Password must be at least 8 characters");
    }
    else{
        setPasswordError("")
    }
};
const handleconfirmpassword= (e) => {
    setConfirmpassword(e.target.value);
    if(e.target.value.length < 8) {
        setConfirmpasswordError("Passwords must match");
    }
    else{
        setConfirmpasswordError("")
    }
};
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ handlename } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ handlelastname } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleemail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlepassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={ handleconfirmpassword } />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{password}</p>
        </form>
    );
};
export default Userform