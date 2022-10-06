import './App.css';
import axios from 'axios';
import Greetings from './components/greetings';

const API_URL = 'http://localhost:3000/api/v1/greetings';

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
