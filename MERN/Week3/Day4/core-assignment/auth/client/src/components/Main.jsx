import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AuthorList from './AuthorList';



const Main = (props) => {
const [authors, setAuthors] = useState([])
const [isLoading, setIsLoading] = useState(true);


useEffect (()=>{
  axios.get('http://127.0.0.1:8000/api/authors')
  .then(res => {
      console.log(res.data);
      setAuthors(res.data);
      setIsLoading(false);
  })
  .catch(err => console.log(err))
},[]);

const deleteAuthor = id =>{
  axios.delete(`http://127.0.0.1:8000/api/authors/${id}`)
  .then(()=> {console.log('Author delete')
  setAuthors (authors.filter((author)=> author._id !==id))
})
  .catch(err => console.log(err));
};
//Delete from DOM


if (isLoading) {
  return <h2>Loading.....</h2>
}



  return (
    <div>
      <Link to='/new'>Add an author</Link>
      <h4>We have quotes by :</h4>
      <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </div>
  )
}

export default Main
