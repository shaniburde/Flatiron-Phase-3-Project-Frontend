import './App.css';
import EventContainer from './EventContainer';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

 useEffect(() => {
    fetch('http://localhost:9292/')
    .then(r => r.json())
    .then(data => setData(data))
  }, [])

   return (
    <>
      <EventContainer data={data}/>
    </>
  );
}

export default App;
