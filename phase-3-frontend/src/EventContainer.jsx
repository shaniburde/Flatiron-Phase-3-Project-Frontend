import React, { useState, useEffect } from 'react'
import EventList from './EventList'

function EventContainer({data, handleDeleteEvent, handleUpdateEvent}) {
    return(
    <>
    <br/>
    <h2>My Events</h2>
    <br/>
        <EventList 
        data={data} 
        handleDeleteEvent={handleDeleteEvent}
        handleUpdateEvent={handleUpdateEvent}
        />
    </>
    )
}

export default EventContainer;