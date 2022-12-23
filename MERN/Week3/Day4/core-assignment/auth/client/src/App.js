import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import MoviesHome from './components/MoviesHome';
import Main from './components/Main';
import CreateAuthor from './components/CreataAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Details from './components/Details';
import LogIn from './components/LogIn';
import Container from './container/Container'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Container />} />
        {/* <Route path="/Log-in" element={<LogIn />} />
        <Route path="/movies" element={<MoviesHome />} />
        <Route path='/home' element={< Main/>} />
        <Route path='/new' element={<CreateAuthor/>}/>
        <Route path='/edit/:id' element={<UpdateAuthor/>}/>
        <Route path='/details/:id' element={< Details/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
