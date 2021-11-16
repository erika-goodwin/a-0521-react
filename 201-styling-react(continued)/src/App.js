import React, { useState, useEffect } from "react";

import "./App.css";

import EventList from "./components/EventList";

function App() {
  const [events, setEvents] = useState([]);
  const [url, setUrl] = useState("");

  const fetchEvent = useCallback(async () => {
    const response = await fetch(url);
    const events = await response.json();
    setEvents(events)
  });

  useEffect(() => {
    console.log("useEffect function ");
    fetchEvent();
  }, [fetchEvent]);

  return (
    <div className="App">
      <h1 style={{ color: "red", paddingTop: "50px" }}>Weekend Events</h1>

      {events && <EventList events={events} />}

      <div className="filters">
        <button onClick={() => setUrl("http://local:3000/events?loc=Europe")}>
          European Events
        </button>{" "}
        <button onClick={() => setUrl("http://local:3000/events")}>
          All Events
        </button>
      </div>
    </div>
  );
}

export default App;
