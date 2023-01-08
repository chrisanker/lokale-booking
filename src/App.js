import React from 'react';
import { Booking } from './Booking';
import './css/App.css';
import {SearchPage} from "./SearchPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRoomSelected: false
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isRoomSelected ? <Booking /> : <SearchPage />}
      </React.Fragment>
    );
  }
}

export default App;
