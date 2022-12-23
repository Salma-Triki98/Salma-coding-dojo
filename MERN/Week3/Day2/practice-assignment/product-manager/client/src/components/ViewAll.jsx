import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ViewAll = (props) => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
   

    useEffect (()=>{
        axios.get('http://127.0.0.1:8000/api/project')
        .then(res => {
            console.log(res.data);
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    },[])


    const hadleDelete = ((id) => {
        axios.delete('http://127.0.0.1:8000/api/project/'+id)
        .then (res => {
            console.log(res.data)
            console.log("Delete Succesfully")
            setProducts(products.filter((product)=> product._id !== id))
            })
        .catch(err => console.log(err))   
        })
    

  return (
    <div>
        <h1>All Products:</h1>
        {products.map((product)=>{
        return( 
            <div  key={product._id} >
            <Link to ={`/product/${product._id}`}>
        <h4>{product.title}</h4>
        </Link>
        <Link  to ={`/update/${product._id}`}>
        <button>Edit</button>
        </Link>
        <button onClick={()=> hadleDelete(product._id)}>Delete</button>
        </div>

        )
        })}
        
    </div>
  )
}

export default ViewAll
