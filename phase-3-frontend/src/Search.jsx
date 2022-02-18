import React from 'react'

export default function Search({ searchTerm, setSearchTerm}) {
  return (
      <div className="search-container">
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
