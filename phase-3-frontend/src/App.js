import './App.css';
import { Routes, Route } from "react-router-dom";
import EventContainer from './EventContainer';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import EventForm from './EventForm';
import VenueForm from './VenueForm'

function App() {
  const [data, setData] = useState([])

 useEffect(() => {
    fetch('http://localhost:9292/')
    .then(r => r.json())
    .then(data => setData(data))
  }, [])

   return (
    <>
    <Header/>
      <Routes>
            <Route exact path='/my-events' element={<EventContainer data={data} setData={setData}/>}/>
            <Route exact path='/create-event' element={<EventForm />} />
            <Route exact path='/create-venue' element={<VenueForm />} />
      </Routes>  
    </>
  );
}

export default App;
