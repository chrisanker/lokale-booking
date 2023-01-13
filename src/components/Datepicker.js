import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate(props) {

    const [date, setDate] = useState(props?.value ?? '');

    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div id="datepicker-container">
                <input type={"date"} value={date} onInput={(e) => setDate(e.target.value)}></input>
                <button onClick={() => props.handleClick(date)}>Søg</button>
            </div>
        </div>
    );
}
