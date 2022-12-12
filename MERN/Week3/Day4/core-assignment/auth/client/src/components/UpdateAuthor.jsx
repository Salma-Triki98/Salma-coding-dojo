import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateAuthor = () => {
    const [name,setName] = useState({})
    const [errors, setErrors] = useState({}); 
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect (()=>{
        axios.get(`http://127.0.0.1:5000/api/authors/${id}`)
        .then(res => {
            console.log(res.data);
            setName(res.data)
        })
        .catch(err => console.log(err))
    },[id])

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/authors/'+id, {name})
        .then(() => {
            navigate('/')})
            .catch(err=>{
                console.log(err.response.data.message);
                const errorResponse = err.response.data.errors;
                const errorObj = {}; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorObj[key] = errorResponse[key].message;
            }
            // Set Errors
            setErrors(errorObj);
            
        })}
    

    return (
    <div>
        <div>
        <Link to='/'>Home</Link>
        <h4>Edit this author:</h4>
        <p style={{color:"red"}}>{errors.name}</p>
        <form onSubmit={handleUpdate}>
            <label>Name:</label>
            <input   value={name.name}  onChange={(e)=>setName( e.target.value)}/> <br></br>
            <Link to='/'><button>Cancel</button></Link>
            <button>Submit</button>
        </form>
    </div>
    </div>
)
}

export default UpdateAuthor