import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("Mario");
  const [events, setEVents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's live stream", id: 2},
    {title: "Race on the moo moo farm", id: 3},
  ]);

  const handleClick = () => {
    setName("Luigi");
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
