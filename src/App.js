import React, { useState } from 'react';
import { Booking } from './Booking';
import './css/App.css';
import {SearchPage} from "./SearchPage";

function App() {
  const [roomSelectedState, setRoomSelectedState] = useState(false);
  return (
    <React.Fragment>
       {roomSelectedState ? <Booking /> : <SearchPage />}
    </React.Fragment>
  );
}

export default App;
