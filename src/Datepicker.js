import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate(props) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h2>Hvornår skal du bruge det?</h2>
            <div id="datepicker-container">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} popperPlacement="auto" />
            </div>
        </div>
    );
}