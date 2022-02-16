import React from 'react';
import EventCard from './EventCard'

function EventList({data, handleDeleteEvent, handleUpdateEvent}) {
    const eventList = data.map((data) => 
    <EventCard
        key={data.id}
        data={data}
        handleDeleteEvent={handleDeleteEvent}
        handleUpdateEvent={handleUpdateEvent}
    />)
  return (
    <div className="event-list">
    {eventList}
    </div>
  )
}

export default EventList;
