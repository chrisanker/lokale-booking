import React from "react";

export function Room(props) {
    const name = props.name;
    
    return(
        <React.Fragment>
            <label>{name}</label>
            <button onClick={() => props.getRoomName(name)}>Vælg</button>
        </React.Fragment>
    )
}


