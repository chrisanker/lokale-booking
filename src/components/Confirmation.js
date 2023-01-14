import React from "react";

export function Confirmation (props) {
    const email = props.email;

    return(
        <React.Fragment>
            <h1>Tak for din booking.</h1>
            <p>En bekræftelse er blevet sendt til {email}.</p>
            <p>Ønsker du at booke et andet mødelokale?</p>
            <button onClick={() => props.handleClick()}>Ja</button>
        </React.Fragment>
    )
}