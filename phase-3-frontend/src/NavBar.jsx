import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
        <NavLink to="/my-events" exact className="nav-button"> My Events </NavLink>
        <NavLink to="/create-event" exact className="nav-button"> New Event </NavLink>
        <NavLink to="/create-venue" exact className="nav-button"> New Venue </NavLink>
    </div>
  )
}
