import React, { useState } from "react";
import App from "../App";
import {Booking} from "./Booking";

export function Room(props) {
    const name = props.name;
    const selection = props.selection;
    //const [selection, setSelection] = useState();


    return(
        <React.Fragment>
            {name}
            <button onClick={() => props.getName(name)}>Vælg</button>
        </React.Fragment>
    )
}


