import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
        <NavLink to="/my-events" exact className="button"  
        activeStyle={{
            background: "#fffdef",
            color: "#39442e",
            textShadow: "none",
            boxShadow: "0 3px #b5cb98",
            transform: "translateY(2px)",
            fontWeight: "bold",
            }}>My Events</NavLink>
    </div>
  )
}
