import './App.css';
import Putting from './components/Putting';
const bloc = [
  {
  "firstname": "Doe",
  "lastname": "Jane",
  "age": 45,
  "HairColor": "Black"
  },
  {
    "firstname": "Smith",
    "lastname": "John",
    "age": 88,
    "HairColor": "Brown"
  },
  {
    "firstname": "Fillmore",
    "lastname": "Millard",
    "age": 50,
    "HairColor": "Brown"
  },
  {
    "firstname": "Smith",
    "lastname": "Maria",
    "age": 62,
    "HairColor": "Brown"
  }

];

function App() {
  return (
    <div className="App">
    {bloc.map(person => {
        return <Putting firstname={person.firstname} lastname={person.lastname} age={person.age} HairColor={person.HairColor} />
      })
    }
    </div>
  );
}

export default App;