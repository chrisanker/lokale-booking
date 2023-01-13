import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
import {RoomList} from "./components/RoomList";
import {Room} from "./components/Room";
import {Booking} from "./components/Booking";
function App() {
    const [rooms, setRooms] = useState([
        'Mødelokale 1',
        'Mødelokale 2',
        'Mødelokale 3',
        'Mødelokale 4'
    ]);
    const [selection, setSelection] = useState()
    const [date, setDate] = useState()
    const availableRooms = [];
    for (let i = 0; i < rooms.length; i++){
        availableRooms.push(<li><Room name={rooms[i]} getRoomName={selection => setSelection(selection)}/></li>);
    }
    return (
        <React.Fragment>
            <div>
                <Resource />
                <SelectDate date={date} handleClick={date => setDate(date)}/>
                <RoomList availableRooms={availableRooms} />
                {selection ? <Booking selection={selection} date={date} /> : null}
            </div>
        </React.Fragment>
    );
}
export default App;
