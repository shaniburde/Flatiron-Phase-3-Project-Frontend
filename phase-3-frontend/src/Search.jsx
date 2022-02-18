import React from 'react'

export default function Search({ searchTerm, setSearchTerm}) {
  return (
      <div>
        <h3>Search</h3>
        <input
        className="search-bar"
        type="text"
        placeholder="Search by artist name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

  )
}
