import './App.css';
import React, {useState} from 'react';
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's live stream", id: 2},
    {title: "Race on the moo moo farm", id: 3},
  ]);

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const subtitle = "All the lastest events in Marioland";

  return (
    <div className="App">
      <Title  title="Events in Your Area" subtitle={subtitle}/>
      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>)}
      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>}
      
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </React.Fragment>
      ))}
      
      {/* <Modal>
          <h2>10% Off Coupon Code!!!</h2>
          <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <button onClick={() => setShowModal(true)}>Show Terms & Conditions</button>
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repudiandae sequi doloremque rem corrupti accusantium? Ex incidunt nostrum neque sapiente maiores voluptatibus tempora debitis sint! Quod cumque temporibus veritatis minima ducimus error commodi laborum, sed saepe aut, quidem ipsa at.</p>
      </Modal>}
    </div>
  );
}

export default App;
