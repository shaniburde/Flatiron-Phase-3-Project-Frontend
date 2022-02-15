import React, { useState, useEffect } from 'react';


export default function EventForm({ addEvent }) {
    const [attendees, setAttendees] = useState(0);
    const [eventType, setEventType] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [venueData, setVenueData] = useState([]);
    const [venue, setVenue] = useState('')


    function handleAttendeesChange(e){
        setAttendees(e.target.value)
    }
    function handleEventTypeChange(e){
        setEventType(e.target.value)
    }
    function handlePriceChange(e){
        setPrice(e.target.value)
    }
    function handleDateChange(e){
        setDate(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newEventObj = {
            attendees: attendees,
            event_type: eventType,
            price: price,
            date: date,
            venue_id: venue,
            user_id: 1
        }
              fetch("http://localhost:9292/add-event",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEventObj)
              })
              .then(response => response.json())
              .then((data) => console.log(data))  
              setAttendees(0)
              setEventType('')
              setPrice(0)
              setDate('')
              
      }

      useEffect(() => {
          fetch(`http://localhost:9292/venues`)
          .then(r => r.json())
          .then(data => setVenueData(data))
      }, [])

      const venueOptions = venueData.map(({ id, venue_name }) => 
      <option key={id} value={id}>{venue_name}</option>
      )

      function handleVenueSelect(e){
          setVenue(e.target.value)
      }






  return (
    <>
    <form onSubmit={handleSubmit}>
        <select id="venue-data" onChange={handleVenueSelect}>
            {venueOptions}
        </select>
        <label htmlFor="attendees">Attendees:</label>
        <input 
        name="attendees"
        type="number"
        placeholder="Amount of people attending..."
        value={attendees}
        onChange={handleAttendeesChange}
        >
        </input>
        <label htmlFor="event-type">Type of Event:</label>
        <input 
        name="event-type"
        type="string"
        placeholder="Type of event..."
        value={eventType}
        onChange={handleEventTypeChange}
        >
        </input>
        <label htmlFor="price">Ticket Price:</label>
        <input 
        name="price"
        type="number"
        placeholder="Ticket price..."
        value={price}
        onChange={handlePriceChange}
        >
        </input>
        <label htmlFor="date">Date:</label>
        <input 
        name="date"
        type="date"
        placeholder="Event date..."
        value={date}
        onChange={handleDateChange}
        >
        </input>
        <button className="form-input" type="submit">Create Event</button> 
    </form>
        
    </>
  )
}
