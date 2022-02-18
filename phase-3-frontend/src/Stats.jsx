import React, { useEffect, useState } from 'react';

export default function Stats() {
    const [popular, setPopular] = useState("")
    const [skrilla, setSkrilla] = useState("")
    const [busy, setBusy] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/most-popular')
        .then(r => r.json())
        .then(data => setPopular(data))
      }, [])
    const name = popular.split('-')[0]
    const fans = popular.split('-')[1]

    useEffect(() => {
        fetch('http://localhost:9292/most-skrilla')
        .then(r => r.json())
        .then(data => setSkrilla(data))
      }, [])
    const skrillaName = skrilla.split('-')[0]
    const skrillaFans = skrilla.split('-')[1]

    useEffect(() => {
        fetch('http://localhost:9292/busy-bee')
        .then(r => r.json())
        .then(data => setBusy(data))
      }, [])
    

  return (
    <> 
    <h2> Artist Stats </h2>
    <div className="stats">
        <h3>Most Popular:</h3>
        <h5>{name}</h5>
        <h5>{fans}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>Most Money moves:</h3>
        <h5>{skrillaName}</h5>
        <h5>{skrillaFans}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>busy bee:</h3>
        <h5>{busy}</h5>
    </div>
    </>
  )
}
