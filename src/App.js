import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
import {RoomList} from "./components/RoomList";
import {Room} from "./components/Room";
import {Booking} from "./components/Booking";
function App() {
    const [availableRooms, setAvailableRooms] = useState([
        'Mødelokale 1',
        'Mødelokale 2',
        'Mødelokale 3',
        'Mødelokale 4'
    ]);
    const [selection, setSelection] = useState("")
    const final = [];
    for (let i = 0; i < availableRooms.length; i++){
        final.push(<li><Room name={availableRooms[i]} /></li>);
    }
    return (
        <React.Fragment>
            <div>
                <Resource />
                <SelectDate />
                <RoomList availableRooms={final} />
                <Booking selection={selection}/>
            </div>
        </React.Fragment>
    );
}
export default App;
