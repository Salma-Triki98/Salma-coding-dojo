
import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import DisplayBox from './components/DisplayBox';

function App() {

  const [boxes, setBoxes] = useState([
    {color:'red'},
    {width:'100px'},
    {heigh:'100px'}
  ])


  // const Addbox = (newbox) => {
  //     //console.log('hello', newbox);
  //     //const boxcol = [...box];
  //     //boxcol.push(newbox);
  //     setBox([...box, newbox ]);

  
  return (
    <div className="App">

          <Box  box={boxes} setBox={setBoxes} />
          
          <DisplayBox box={boxes} />
    </div>
  );
}

export default App;
