import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate(props) {
    const selectedDate = props.date;
    const [date, setDate] = useState(props?.value ?? '');


    /* props.handleClick = () => {
        if(!startDate) {
            alert("Vælg venligst en dato.")
        }
        else {
            //props.date = startDate;
        }
    }; */
    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div id="datepicker-container">

            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} popperPlacement="auto" /> */}
                <input type={"date"} value={date} onInput={(e) => setDate(e.target.value)}></input>
            </div>
            <div className="button-container">
                <button onClick={() => props.handleClick(date)}>Søg</button>
                {console.log("Selected date: " + date)}
            </div>
        </div>
    );
}
