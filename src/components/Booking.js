import React, {useState} from "react";

export function Booking(props) {
    const selection = props.selection;
    return(
        <React.Fragment>
            <h1>Bookingdetaljer</h1>
            <form>
                <label>Du har valgt</label>
                <input type="text" readOnly={true} value={selection} /><br/>
            </form>
        </React.Fragment>
    )
}
