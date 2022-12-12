import React,{useState, useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Home = (props) => {
 const [people,setpeople] = useState([]);
  useEffect(()=>{
    return(
  axios.get('https://swapi.dev/api/people/')
            .then(response=>{
              return(
              response.data.results,
              setpeople(response.data.results))})
            .catch(err=>{console.log(err)})
            ,[]) }); 
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Search for:</label>
          <select >
            <option>people</option> 
            <option>planet</option> 
          </select>
          <label >ID:</label>
          <input type="number" min={1} style={{width:'30px'}}/>
          <input type="submit" value='Search'/>
      </form>
    </div>
  )
}

export default Home