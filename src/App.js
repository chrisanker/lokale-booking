import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
import {RoomList} from "./components/RoomList";
import {Room} from "./components/Room";
import {BookingDetails} from "./components/BookingDetails";
function App() {
    const rooms = [
        'Mødelokale 1',
        'Mødelokale 2',
        'Mødelokale 3',
        'Mødelokale 4'
    ];
    const [selection, setSelection] = useState()
    const [date, setDate] = useState()
    const availableRooms = [];
    for (let i = 0; i < rooms.length; i++){
        availableRooms.push(<li><Room name={rooms[i]} getRoomName={selection => setSelection(selection)}/></li>);
    }
    return (
        <React.Fragment>
            <div>
                {!selection ? <Resource /> : null}
                {!selection ? <SelectDate date={date} handleClick={date => setDate(date)}/> : null}
                {date && !selection ? <RoomList availableRooms={availableRooms} /> : null}
                {selection ? <BookingDetails selection={selection} date={date} /> : null}
            </div>
        </React.Fragment>
    );
}
export default App;
