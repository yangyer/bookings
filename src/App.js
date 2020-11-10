import logo from './logo.svg';
import './App.css';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
