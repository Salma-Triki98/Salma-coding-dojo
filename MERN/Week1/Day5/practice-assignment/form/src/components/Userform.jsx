import React, {useState} from 'react'

const Userform = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");  
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
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