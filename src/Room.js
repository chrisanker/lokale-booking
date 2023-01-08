import React from "react";

export function Room(props) {
    const name = props.name;  
    return(
        <React.Fragment>
            {name}
        </React.Fragment>
    )
}