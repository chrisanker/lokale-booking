import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate(props) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
        <h2>Hvornår skal du bruge det?</h2>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} popperPlacement="auto" />
        </>
    );
}