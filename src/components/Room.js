import React, { useState } from "react";
import App from "../App";
import {Booking} from "./Booking";

export function Room(props) {
    const name = props.name;
    const [selection, setSelection] = useState();

    const handleClick = (name) => {
        setSelection(name);
    }
    return(
        <React.Fragment>
            {name}
            <button onClick={() => handleClick()}>Vælg</button>
        </React.Fragment>
    )
}


