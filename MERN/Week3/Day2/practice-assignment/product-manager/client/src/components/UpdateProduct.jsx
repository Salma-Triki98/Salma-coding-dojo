import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router"; 
import { useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const navigate = useNavigate();

  const [inputs, setInputs] = useState({title:"", price:0, description:""});
  const {id} =useParams()

  useEffect (()=>{
    axios.get(`http://127.0.0.1:8000/api/project/${id}`)
    .then(res => {
        console.log(res.data);
        setInputs(res.data)
    })
    .catch(err => console.log(err))
},[id])
const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/api/project/'+id, {
        title : inputs.title, 
        price : inputs.price,
        description : inputs.description
    })
    .then(res => {
        console.log(res.data)
        setInputs(res.data)})
    .catch(err => console.log(err));

    navigate('/')


    

}

  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input value={inputs.title}  onChange={(e)=>setInputs({...inputs, title: e.target.value})}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={inputs.price} onChange={(e)=>setInputs({...inputs, price: e.target.value})}/>
            </div>
            <div>
                <label>Description</label>
                <input value={inputs.description} onChange={(e)=>setInputs({...inputs, description: e.target.value})} />
            </div>
            <input type="submit" value="Update"/>
        </form>
        <hr/>
    </div>
  )
}

export default UpdateProduct