import React from "react";

export function Room(props) {
    const name = props.name;
    const handleClick = (name) => {
        console.log("You selected " + name)
    } 
    return(
        <React.Fragment>
            {name}
            <button onClick={() => handleClick(props.name)}>Vælg</button>
        </React.Fragment>
    )
}