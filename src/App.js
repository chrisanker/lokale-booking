import React, { useState } from 'react';
import './css/App.css';
import { Header } from "./components/Header";
import { SelectDate } from "./components/Datepicker";
import { RoomList } from "./components/RoomList";
import { Room } from "./components/Room";
import { BookingDetails } from "./components/BookingDetails";
import { Confirmation } from './components/Confirmation';
import { EquipmentList } from './components/EquipmentList';

function App() {

    //Below hook will eventally store the state of each room and which dates they are booked.
   /*  const [rooms, setRooms] = useState([
        { id: 1, name: 'Mødelokale 1', datesBooked: [] },
        { id: 2, name: 'Mødelokale 2', datesBooked: [] },
        { id: 3, name: 'Mødelokale 3', datesBooked: [] },
        { id: 4, name: 'Mødelokale 4', datesBooked: [] }
    ]); */

    //Below array is used until the above hook is properly implemented.
    const rooms = [
        { id: 1, name: 'Mødelokale 1', datesBooked: [] },
        { id: 2, name: 'Mødelokale 2', datesBooked: [] },
        { id: 3, name: 'Mødelokale 3', datesBooked: [] },
        { id: 4, name: 'Mødelokale 4', datesBooked: [] }
    ];

    const [selection, setSelection] = useState();
    const [date, setDate] = useState();
    const [submissionMade, setSubmissionMade] = useState(false);
    const [email, setEmail] = useState();
    const [equipmentSearch, setEquipmentSearch] = useState(false);
    const [equipmentSelected, setEquipmentSelected] = useState(false);

    const checkHandler = () => {
        setEquipmentSearch(!equipmentSearch);
    }

    const availableRooms = rooms.map((room, name) => (
        <li key={name}>
            <Room name={room.name} getRoomName={selection => setSelection(selection)} equipmentSearch={equipmentSearch} />
        </li>)
    );
    const updateDatesBooked = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        console.log(selection, date);
        setSubmissionMade(!submissionMade);
    };

    function startNewSearch() {
        setSubmissionMade(!submissionMade);
        setSelection(undefined);
        setDate(undefined);
    }

    return (
        <React.Fragment>
            <div>
                {!selection ? <Header /> : null}
                {!selection ? <SelectDate
                    date={date} handleClick={date => setDate(date)}
                    checkHandler={checkHandler}
                /> : null
                }
                {date && !selection ? <RoomList availableRooms={availableRooms} /> : null}
                {equipmentSearch && date && !selection ? <EquipmentList /> : null}
                {selection && !submissionMade ?
                    <BookingDetails selection={selection} date={date} handleSubmit={updateDatesBooked}
                    /> : null
                }
                {submissionMade ? <Confirmation email={email} handleClick={startNewSearch} /> : null}
            </div>
        </React.Fragment>
    );
}
export default App;
