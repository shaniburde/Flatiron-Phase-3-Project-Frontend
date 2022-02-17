import './App.css';
import { Routes, Route } from "react-router-dom";
import EventContainer from './EventContainer';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import EventForm from './EventForm';
import VenueForm from './VenueForm';
import Stats from './Stats';
// import Login from './Login';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(data => setData(data))
    }, [])

  function handleDeleteEvent(eventToDelete){
    const updatedEvents = data.filter((event) => {
      if (event.id !== eventToDelete.id) {
        return event
      } else {
        return null
      }
    });
    setData(updatedEvents);
  }

  function handleUpdateEvent(updatedEventObj) {
    const editedEvents = data.map((event) => {
      if (event.id === updatedEventObj.id) {
        return updatedEventObj;
      } else {
        return event;
      }
    });
    setData(editedEvents);
  }

   return (
    <>
    <div className="app">
    <Header/>
      <Routes>
            <Route exact path='/my-events' element={
            <EventContainer 
            data={data} 
            handleDeleteEvent={handleDeleteEvent} 
            handleUpdateEvent={handleUpdateEvent}
            />} />
            <Route exact path='/create-event' element={<EventForm />} />
            <Route exact path='/create-venue' element={<VenueForm />} />
            <Route exact path='/stats' element={<Stats/>} />
      </Routes>  
    </div>
    </>
  );
}

export default App;
