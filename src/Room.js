import React, { useState } from "react";

export function Room(props) {
    const name = props.name;
    const [roomSelected, setRoomSelected] = useState(true);

    const handleClick = (name) => {
        setRoomSelected(roomSelectedState => !roomSelectedState);
        console.log("You selected " + name + ", " + roomSelected);
    } 
    return(
        <React.Fragment>
            {name}
            <button onClick={() => handleClick(props.name)}>Vælg</button>
        </React.Fragment>
    )
}