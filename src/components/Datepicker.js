import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate(props) {

    const [date, setDate] = useState(props?.value ?? '');

    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div className="datepicker-container" id="datepicker-container">
                <div>
                    <input type={"date"} value={date} onInput={(e) => setDate(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={() => props.handleClick(date)}>Søg</button>
                </div>
            </div>
        </div>
    );
}
