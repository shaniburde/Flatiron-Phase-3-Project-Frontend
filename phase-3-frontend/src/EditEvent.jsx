import React, { useState } from 'react'

export default function EditEvent({data, setUpdatedEvent}) {
    const {id, event_type, date, price, attendees} = data

    const [updatedAttendees, setUpdatedAttendees] = useState(attendees);
    const [updatedEventType, setUpdatedEventType] = useState(event_type);
    const [updatedPrice, setUpdatedPrice] = useState(price);
    const [updatedDate, setUpdatedDate] = useState(date);

    function handleAttendeesChange(e){
        setUpdatedAttendees(e.target.value)
    }
    function handleEventTypeChange(e){
        setUpdatedEventType(e.target.value)
    }
    function handlePriceChange(e){
        setUpdatedPrice(e.target.value)
    }
    function handleDateChange(e){
        setUpdatedDate(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/events/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_type: updatedEventType,
            attendees: updatedAttendees,
            price: updatedPrice,
            date: updatedDate
          }),
        })
          .then((r) => r.json())
          .then((updatedEvent) => setUpdatedEvent(updatedEvent));
      }

  return (
    <form className="edit-event" onSubmit={handleSubmit}>
      <input 
        name="attendees"
        type="number"
        placeholder="Amount of people attending..."
        value={updatedAttendees}
        onChange={handleAttendeesChange}
        >
        </input>
        <label htmlFor="event-type">Type of Event:</label>
        <input 
        name="event-type"
        type="string"
        placeholder="Type of event..."
        value={updatedEventType}
        onChange={handleEventTypeChange}
        >
        </input>
        <label htmlFor="price">Ticket Price:</label>
        <input 
        name="price"
        type="number"
        placeholder="Ticket price..."
        value={updatedPrice}
        onChange={handlePriceChange}
        >
        </input>
        <label htmlFor="date">Date:</label>
        <input 
        name="date"
        type="date"
        placeholder="Event date..."
        value={updatedDate}
        onChange={handleDateChange}
        >
        </input>
        <input type="submit" value="Save" />
    </form>
  )
}
