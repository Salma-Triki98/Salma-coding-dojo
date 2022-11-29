
import './App.css';
import React, {useState} from 'react';

function App() {
  const[pokemons,setPokemons]= useState([])
  
  const FetchPokemon = ()=> {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      return response.json();
  }).then(response => {
    setPokemons(response.results);
  }).catch(err=>{
      console.log(err);
  });
  }
  console.log(pokemons);



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
