import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export function SelectDate(props) {

    const [date, setDate] = useState(props?.value ?? '');
    const today = moment().format("YYYY-MM-DD");

    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div className="datepicker-container">
                <div>
                    <input type={"date"} min={today} value={date} onInput={(e) => setDate(e.target.value)}></input><br /><br />
                    <div id="datepicker-equipment-select">
                        <input type={"checkbox"} onChange={(e) => props.checkHandler(e)} />
                        <label>Jeg ønsker også at booke udstyr</label>
                    </div>
                </div>
                <div>
                    <button onClick={() => props.handleClick(date)}>Søg</button>
                </div>
            </div>
        </div>
    );
}
