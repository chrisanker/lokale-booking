import React from "react";

export function Booking(props) {
    const selection = props.selection;
    const date = props.date;
    return(
        <React.Fragment>
            <h1>Bookingdetaljer</h1>
            <form>
                <label>Du har valgt</label>
                <input type={"text"} readOnly={true} value={selection} /><br/>
                <label>Dato</label>
                <input type={"date"} readOnly={true} value={date}></input>
            </form>
        </React.Fragment>
    )
}
