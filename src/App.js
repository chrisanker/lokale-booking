import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
import {RoomList} from "./components/RoomList";
import {Booking} from "./components/Booking";
function App() {
    const [isRoomSelected, setIsRoomSelected] = useState(false);

    return (
        <React.Fragment>
            {isRoomSelected ? <Booking /> :
                <div>
                    <Resource />
                    <SelectDate/>
                </div>
            }
        </React.Fragment>
    );
}
export default App;
