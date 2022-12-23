
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <People/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/people/:peopleid" element={<People />} />
        <Route path="/Planet/:planetid" element={<Planet />} />
        </Routes>
      
    </div>
  );
}

export default App;
