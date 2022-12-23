import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios  from 'axios';
import { useNavigate } from "react-router-dom";

const CreateAuthor = () => {
    const navigate = useNavigate()
    const [name, setName]= useState({})
    const [errors, setErrors] = useState({}); 
    const handleSubmit = e =>{
        e.preventDefault()
            axios.post('http://127.0.0.1:8000/api/authors', {name})
            .then(res=>{
                console.log(res.data)
                navigate('/home')
            }
            )
                .catch(err=>{
                    console.log(err.response.data.message);
                    const errorResponse = err.response.data.errors;
                    const errorObj = {}; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorObj[key] = errorResponse[key].message;
                }
                // Set Errors
                setErrors(errorObj);
                
            })
        }

  return (
    <div>
        <Link to='/'>Home</Link>
        <h4>Add a new Author:</h4>

       <form onSubmit={handleSubmit}>
       <p style={{color:"red"}}>{errors.name}</p>
        <label>Name:</label>
        <input   value={name.name}  onChange={(e)=> setName(e.target.value)}/> <br></br>
        <Link to='/'><button>Cancel</button></Link>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateAuthor