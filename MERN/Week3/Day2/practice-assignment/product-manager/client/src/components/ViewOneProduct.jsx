import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewOneProduct = (props) => {
  const {id} = useParams()
  const [product, setProduct]= useState({})
  const navigate = useNavigate();

  useEffect (()=>{
    axios.get(`http://127.0.0.1:8000/api/project/${id}`)
    .then(res => {
        console.log(res.data);
        setProduct(res.data)
    })
    .catch(err => console.log(err))
},[id])


const hadleDelete = ((id) => {
  axios.delete('http://127.0.0.1:8000/api/project/'+id)
  .then (res => {
      console.log(res.data)
      console.log("Delete Succesfully")
      })
  .catch(err => console.log(err)) 
  
  navigate('/')
  })

  return (
    <div>{
      product ? <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
      <Link  to ={`/update/${product._id}`}>
        <button>Edit</button>
        </Link>
      <button onClick={()=> hadleDelete(product._id)}>Delete</button>
      </div>: "loading...."}


        
      
      </div>
  )
}

export default ViewOneProduct