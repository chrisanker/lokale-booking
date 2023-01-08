import React from "react";

export function Room(props) {
    const name = props.name;
    const handleClick = () => {
        alert("You clicked it!")
    } 
    return(
        <React.Fragment>
            {name}
            <button onClick={handleClick}>Vælg</button>
        </React.Fragment>
    )
}