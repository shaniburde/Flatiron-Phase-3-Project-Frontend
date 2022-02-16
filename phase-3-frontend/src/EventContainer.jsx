import React, { useState, useEffect } from 'react'
import EventList from './EventList'

function EventContainer({data, setData}) {
    return(
    <>
    <h1>Event List</h1>
        <EventList data={data} setData={setData}/>
    </>
    )
}

export default EventContainer;