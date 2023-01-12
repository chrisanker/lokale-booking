import React from "react";

export function Booking() {
    return(
        <React.Fragment>
            <h1>Bookingdetaljer</h1>
            <form>
                <label>Du har valgt</label>
                <input type="text" readOnly="true"/><br/>
            </form>
        </React.Fragment>
    )
}
