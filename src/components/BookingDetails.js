import React from "react";

export function BookingDetails(props) {
    const selection = props.selection;
    const date = props.date;
    return (
        <React.Fragment>
            <h1>Færdiggør Booking</h1>
            <div className="booking-container ">
            <div></div>
                <div>
                    <h3>Bookingdetaljer</h3>
                    <p><span>Lokale:</span> {selection}</p>
                    <p><span>Dato:</span> {date}</p>
                </div>
                <div>
                    <form>
                        <h3>Dine Oplysninger</h3>
                        <label>Navn <span>*</span></label><br />
                        <input type={"text"} required /><br />
                        <label>Email <span>*</span></label><br />
                        <input type={"email"}></input><br /><br />
                        <button type={"submit"}>Bekræft</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
