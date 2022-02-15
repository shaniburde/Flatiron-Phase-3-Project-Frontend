import React from 'react';
import EventCard from './EventCard'

function EventList({data}) {
    const eventList = data.map((data) => 
    <EventCard
        key={data.id}
        data={data}
    />)
  return (
    <>
    {eventList}
    </>
  )
}

export default EventList;
