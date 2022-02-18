import React, { useState } from 'react';
import EventCard from './EventCard';
import Search from './Search';

function EventList({data, handleDeleteEvent, handleUpdateEvent}) { 
  const [dataIndex, setDataIndex] = useState(0)
  // console.log(username)

  const [searchTerm, setSearchTerm] = useState("")

  //   const filteredData = data.filter(({username}) => {
  //       return username.toLowerCase().includes(searchTerm.toLowerCase())
  //     })

  
  const eventList = [...data]
    .slice(dataIndex, dataIndex + 8)
    .filter((data) => { 
      return data.user.username.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((data) => 
    <EventCard
        key={data.id}
        data={data}
        handleDeleteEvent={handleDeleteEvent}
        handleUpdateEvent={handleUpdateEvent}
    />)

    function handleClickMore() {
      setDataIndex((dataIndex) => (dataIndex + 8) % data.length);
    }

  return (
    <>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div className="event-list">
    {eventList}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="next-container">
        <button className="next-button" onClick={handleClickMore}>Next</button>
    </div>
    </>    
  )
}

export default EventList;
