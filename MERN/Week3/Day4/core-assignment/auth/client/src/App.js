import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import MoviesHome from './components/MoviesHome';
import Main from './components/Main';
import CreateAuthor from './components/CreataAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<MoviesHome />} />
        <Route path='/home' element={< Main/>} />
        <Route path='/new' element={<CreateAuthor/>}/>
        <Route path='/edit/:id' element={<UpdateAuthor/>}/>
        <Route path='/details/:id' element={< Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
