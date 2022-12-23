import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const Details = (props) => {
    const[author,setAuthor]= useState({})
    const {id} = useParams()

    useEffect (()=>{
        axios.get(`http://127.0.0.1:5000/api/authors/${id}`)
        .then(res => {
            console.log(res.data);
            setAuthor(res.data)
        })
        .catch(err => console.log(err))
    },[id])

  return (
    <div>
        <h2>{author.name}</h2>
        {author.books?.map(book => {
            return (
            <div key={book._id}>
                Book Name:<h4>{book.title}</h4>
                Number of pages:<h4>{book.numberOfPages}</h4>
            </div>) })}
    </div>
  )
}

export default Details
