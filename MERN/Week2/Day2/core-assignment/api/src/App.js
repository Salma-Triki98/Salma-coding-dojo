import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const[pokemons,setPokemons]= useState([])

  const FetchPokemon = ()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response=>{
      return (
        setPokemons(response.data.results),
        console.log(response.data.results)
        ) })
    .catch(err=>{
      console.log(err);
    })
  }



  return (
    <div className="App">
    <button onClick={FetchPokemon}>Fetch Pokemons</button> 
    <div>
      {pokemons.map((p,i)=>{
        return(
          <ul key={i}>
            <li >{p.name}</li>
          </ul>
          )
      })}


      </div>

    </div>
  );
}

export default App;