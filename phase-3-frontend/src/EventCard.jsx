import React, { useState } from 'react';
import EditEvent from './EditEvent';

function EventCard({data, handleDeleteEvent, handleUpdateEvent}) {
    const [isEditing, setIsEditing] = useState(false);
    const [visible, setVisible] = useState(true)

    const {id, attendees, date, event_type, price, venue } = data
    const {venue_name, address, capacity, phone } = venue

    function handleDelete(){
      fetch(`http://localhost:9292/events/${id}`, { 
        method: 'DELETE',
      })
      .then((r) => r.json())
      .then((deletedEvent) => handleDeleteEvent(deletedEvent))
    }

    const dateSplit = date.split('-')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

  return (
    <div className="card">
      {visible ? 
        (<div> {isEditing ? (
        <EditEvent
          id={id}
          data={data}
          setIsEditing={setIsEditing}
          handleUpdateEvent={handleUpdateEvent}
        />
      ) : (
        <>
        <div className="delete-edit-buttons">
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
        </button>
        <button onClick={handleDelete} className="delete-event-btn">X</button>
        </div>
          <h3>{event_type}</h3>
          <h5>{dateItem}</h5>
          <div className="price">🎟️ ${price}</div>
          <div className="attendees">Attendees: {attendees}</div>
          <h5 className="venue-info" onClick={() => setVisible(!visible)}>Venue Info</h5>
      </>
      )} </div>) : (
        <div> 
          <h5 className="venue-info" onClick={() => setVisible(!visible)}>Concert Info</h5>
          <div>{venue_name}</div>
          <div>Address: {address}</div>
          <div>Capacity: {capacity}</div>
          <div>{phone}</div>
        </div>
      )}
    </div>
  )
}
export default EventCard;