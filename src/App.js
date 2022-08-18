import './App.css';
import {useState} from 'react';
import Title from "./components/Title";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's live stream", id: 2},
    {title: "Race on the moo moo farm", id: 3},
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
  }

  return (
    <div className="App">
      <Title />
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>)}
      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>}
      
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
