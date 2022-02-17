import React, { useState } from 'react';
import EditEvent from './EditEvent';

function EventCard({data, handleDeleteEvent, handleUpdateEvent}) {
    const [isEditing, setIsEditing] = useState(false);
    const [visible, setVisible] = useState(false)

    const {id, attendees, date, event_type, price, venue } = data
    const {venue_name, address, capacity, phone } = venue

    function handleDelete(){
      fetch(`http://localhost:9292/events/${id}`, { 
        method: 'DELETE',
      })
      .then((r) => r.json())
      .then((deletedEvent) => handleDeleteEvent(deletedEvent))
    }

  return (
    <div className="card">
      {isEditing ? (
        <EditEvent
          id={id}
          data={data}
          setIsEditing={setIsEditing}
          handleUpdateEvent={handleUpdateEvent}
        />
      ) : (
        <>
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
        </button>
        <button onClick={handleDelete} className="delete-event-btn">X</button>
          <h3>{event_type}</h3>
          <h5>{date}</h5>
          <div className="price">🎟️ ${price}</div>
          <div className="attendees">Attendees: {attendees}</div>
          <h5 onClick={() => setVisible(!visible)}>Venue Info</h5>
          {visible ? <div> 
            <div>{venue_name}</div>
            <div>Address: {address}</div>
            <div>Capacity: {capacity}</div>
            <div>{phone}</div>
          </div> : null}
      </>
      )}
    </div>
  )
}
export default EventCard;