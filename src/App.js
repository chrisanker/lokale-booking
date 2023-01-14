import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
import {RoomList} from "./components/RoomList";
import {Room} from "./components/Room";
import {BookingDetails} from "./components/BookingDetails";

function App() {
    
    const [rooms, setRooms] = useState([
        {id: 1, name: 'Mødelokale 1', datesBooked: []},
        {id: 2, name: 'Mødelokale 2', datesBooked: []},
        {id: 3, name: 'Mødelokale 3', datesBooked: []},
        {id: 4, name: 'Mødelokale 4', datesBooked: []}
    ]);

    const [selection, setSelection] = useState();
    const [date, setDate] = useState();
    const availableRooms = rooms.map((room, name) => (<li key={name}><Room name={room.name} getRoomName={selection => setSelection(selection)}/></li>));

    const updateDatesBooked = (e) => {
        e.preventDefault();
        console.log(selection, date);
    };
    
    return (
        <React.Fragment>
            <div>
                {!selection ? <Resource /> : null}
                {!selection ? <SelectDate date={date} handleClick={date => setDate(date)}/> : null}
                {date && !selection ? <RoomList availableRooms={availableRooms} /> : null}
                {selection ? <BookingDetails selection={selection} date={date} handleSubmit={updateDatesBooked} /> : null}
            </div>
        </React.Fragment>
    );
}
export default App;