import React from "react";

export function Confirmation(props) {
    const email = props.email;

    return (
        <React.Fragment>
            <h1>Tak for din booking.</h1>
            <div className="confirmation-container">
                <p>En bekræftelse er blevet sendt til <span>{email}</span>.</p>
                <p>Ønsker du at booke et andet mødelokale?</p>
                <div className="confirmation-buttons">
                    <button onClick={() => props.handleClick()}>Ja</button>
                    <button>Nej</button>
                </div>
            </div>
        </React.Fragment>
    )
}