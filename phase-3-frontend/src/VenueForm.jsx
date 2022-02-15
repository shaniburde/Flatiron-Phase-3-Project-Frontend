import React, { useState } from 'react'

function VenueForm() {

  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState(0);


function handleVenueChange(e) {
setVenue(e.target.value)
}

function handleAddressChange(e) {
setAddress(e.target.value)
}

function handlePhoneChange(e) {
setPhone(e.target.value)
}
    
function handleCapacityChange(e) {
  setCapacity(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();

    const newVenueObj = {
      venue_name: venue,
      address: address,
      phone: phone,
      capacity: capacity
    }

    fetch("http://localhost:9292/add-venue",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVenueObj)
      })
      .then(response => response.json())
      .then((data) => console.log(data))  
    //   setVenue('')
    //   setAddress('')
    //   setPhone('')
    //   setCapacity('')
  }   


  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>VenueForm</div>
    <label htmlFor="venue-name">Venue Name:</label>
        <input 
        name="venue-name"
        type="string"
        placeholder="Venue Name..."
        value={venue}
        onChange={handleVenueChange}
        >
        </input>
        <label htmlFor="address">Address:</label>
        <input 
        name="Address"
        type="string"
        placeholder="Address..."
        value={address}
        onChange={handleAddressChange}
        >
        </input>
        <label htmlFor="phone">Phone:</label>
        <input 
        name="Phone"
        type="string"
        placeholder="Phone..."
        value={phone}
        onChange={handlePhoneChange}
        >
        </input>
        <label htmlFor="capacity">Capacity:</label>
        <input 
        name="Capacity"
        type="number"
        placeholder="Capacity..."
        value={capacity}
        onChange={handleCapacityChange}
        >
        </input>
        <button className="form-input" type="submit">Add New Venue</button> 
        </form>
    </>
  )
}

export default VenueForm
