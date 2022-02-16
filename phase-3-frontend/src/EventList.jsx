import React from 'react';
import EventCard from './EventCard'

function EventList({data, setData}) {
    const eventList = data.map((data) => 
    <EventCard
        key={data.id}
        data={data}
        setData={setData}
        
    />)
  return (
    <div className="event-list">
    {eventList}
    </div>
  )
}

export default EventList;
