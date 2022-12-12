
import './App.css';
import {Routes, Route}  from "react-router-dom";
import ViewOneProduct from './components/ViewOneProduct';
import Home from './components/Home';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/product/:id' element={<ViewOneProduct />} />
        <Route path='/update/:id' element={<UpdateProduct/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
