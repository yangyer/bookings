import './App.css';

import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { useState } from 'react';

function App({
  listener
}) {
  const history = useHistory()
  const [navMsg, setNavMsg] = useState(null) 
  if (listener) {
    listener('navigation', (msg) => {
      setNavMsg(msg)
      //history.push(msg.path)
    })
  }
  
  return (
    <div className="App">
      <h1>Nav Value: {navMsg && navMsg.path}</h1>
      <header className="App-header">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/zbookings" exact>
          <Bookings />
        </Route>
        <Route path="/zbookings/:id" exact>
          <WithId />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

function Landing() {
  return (
    <div>
    <ul>
      <li>
        <Link to="/zbookings">Bookings</Link>
      </li>
      <li>
        <Link to="/zbookings/123">Booking id=123</Link>
      </li>
    </ul>
      <h2>Landing</h2>
    </div>
  );
}


function Bookings() {
  return (
    <div>
    <ul>
      <li>
        <Link to="/zbookings">Bookings</Link>
      </li>
      <li>
        <Link to="/zbookings/123">Booking id=123</Link>
      </li>
    </ul>
      <h2>Bookings</h2>
    </div>
  );
}

function WithId() {
  return (
    <div>
    <ul>
      <li>
        <Link to="/zbookings">Bookings</Link>
      </li>
      <li>
        <Link to="/zbookings/457">Booking id=123</Link>
      </li>
    </ul>
      <h2>Bookings ID</h2>
    </div>
  );
}


export default App;
