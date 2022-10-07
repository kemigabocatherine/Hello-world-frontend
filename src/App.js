import './App.css';
import axios from 'axios';
import Greetings from './components/greetings';
import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/api/v1/greetings';

function getApiData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApiData().then((items) => {
      if(mounted) {
        setGreetings(items);
      }
    });
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Greetings greetings={greetings} />
    </div>
  );
}

export default App;
