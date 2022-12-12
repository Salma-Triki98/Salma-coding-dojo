
import './App.css';
import {Routes, Route}  from "react-router-dom";
import Main from './components/Main';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={< Main/>} />
        <Route path='/new' element={<CreateAuthor/>}/>
        <Route path='/edit/:id' element={<UpdateAuthor/>}/>
        <Route path='/details/:id' element={< Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
