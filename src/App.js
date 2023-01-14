import React, { useState } from 'react';
import './css/App.css';
import { Resource } from "./components/Resource";
import { SelectDate } from "./components/Datepicker";
import { RoomList } from "./components/RoomList";
import { Room } from "./components/Room";
import { BookingDetails } from "./components/BookingDetails";
import { Confirmation } from './components/Confirmation';

function App() {

    const [rooms, setRooms] = useState([
        { id: 1, name: 'Mødelokale 1', datesBooked: [] },
        { id: 2, name: 'Mødelokale 2', datesBooked: [] },
        { id: 3, name: 'Mødelokale 3', datesBooked: [] },
        { id: 4, name: 'Mødelokale 4', datesBooked: [] }
    ]);

    const [selection, setSelection] = useState();
    const [date, setDate] = useState();
    const [submissionMade, setSubmissionMade] = useState(false);
    const [email, setEmail] = useState();

    const availableRooms = rooms.map((room, name) => (
        <li key={name}>
        <Room name={room.name} getRoomName={selection => setSelection(selection)} />
        </li>)
    );
    const updateDatesBooked = (e) => {        
        e.preventDefault();
        setEmail(e.target.email.value);
        console.log(selection, date);
        setSubmissionMade(true);
    };

    return (
        <React.Fragment>
            <div>
                {!selection ? <Resource /> : null}
                {!selection ? <SelectDate date={date} handleClick={date => setDate(date)} /> : null}
                {date && !selection ? <RoomList availableRooms={availableRooms} /> : null}
                {selection && !submissionMade ? <
                    BookingDetails selection={selection} date={date} handleSubmit={updateDatesBooked}
                /> : null}
                {submissionMade ? <Confirmation email={email} /> : null}
            </div>
        </React.Fragment>
    );
}
export default App;