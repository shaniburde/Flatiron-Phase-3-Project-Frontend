import './App.css';
import { Routes, Route } from "react-router-dom";
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
 <Routes>
      <Route exact path='/myevents' element={<EventContainer data={data}/>}/>
      <Route exact path='/createevent' />
      <Route exact path='/createvenue' />
 </Routes>
     
   
  
  );
}

export default App;
