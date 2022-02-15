import React from 'react'

function EventCard({data}) {
    const {attendees, date, event_type, price, venue } = data
    const {venue_name, address, capacity, phone } = venue
  return (
    <card>
     <h3>{event_type}</h3>
     <h5>{date}</h5>
     <div>${price}</div>
     <div>Attendee Amount: {attendees}</div>
     <h6>Venue Info:</h6>
     <div>{venue_name}</div>
     <div>{address}</div>
     <div>{capacity}</div>
     <div>{phone}</div>
    </card>
  )
}
export default EventCard;