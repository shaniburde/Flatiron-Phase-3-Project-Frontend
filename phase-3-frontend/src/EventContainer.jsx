import React, { useState, useEffect } from 'react'
import EventList from './EventList'

function EventContainer({data}) {
    return(
    <>
    <h1>Event List</h1>
        <EventList data={data}/>
    </>
    )
}

export default EventContainer;