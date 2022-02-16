import React,{ useState }from 'react'

function EventCard({data, setData}) {
    const {id, attendees, date, event_type, price, venue } = data
    const {venue_name, address, capacity, phone } = venue

    function handleDelete(){
      fetch(`http://localhost:9292/events/${id}`, { 
        method: 'DELETE',
      })
      .then((r) => r.json())
      .then((data) => handleDeleteTask(data))
    }

    function handleDeleteTask(eventToDelete){
      const updatedEvents = data.filter((event) => {
        if (event.id !== eventToDelete.id) {
          return data
        } else {
          return null
        }
      });
      setData(updatedEvents);
    }
  return (
    <div className="card">
      <button onClick={handleDelete} className="delete-event-btn">X</button>
        <h3>{event_type}</h3>
        <h5>{date}</h5>
        <div>${price}</div>
        <div>Attendee Amount: {attendees}</div>
        <h6>Venue Info:</h6>
        <div>{venue_name}</div>
        <div>{address}</div>
        <div>{capacity}</div>
        <div>{phone}</div>
    </div>
  )
}
export default EventCard;