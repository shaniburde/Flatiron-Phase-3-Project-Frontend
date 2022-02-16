import React, { useState, useEffect } from 'react'
import EventList from './EventList'

function EventContainer({data, handleDeleteEvent, handleUpdateEvent}) {
    return(
    <>
    <h1>Event List</h1>
        <EventList 
        data={data} 
        handleDeleteEvent={handleDeleteEvent}
        handleUpdateEvent={handleUpdateEvent}
        />
    </>
    )
}

export default EventContainer;