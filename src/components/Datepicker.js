import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {RoomList} from "./RoomList";

export function SelectDate() {
    const [startDate, setStartDate] = useState();
    const [search, setSearch] = useState(false)
    const handleClick = () => {
        if(!startDate) {
            alert("Vælg venligst en dato.")
        }
        else {
            setSearch(true);
        }
    };
    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div id="datepicker-container">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} popperPlacement="auto" />
            </div>
            <div className="button-container">
                <button onClick={handleClick}>Søg</button>
            </div>
        </div>
    );
}
