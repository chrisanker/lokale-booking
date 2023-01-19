import React from "react";

export function Room(props) {
    const name = props.name;
    const equipmentSearch = props.equipmentSearch;
    if (!equipmentSearch) {
        return (
            <React.Fragment>
                <label>{name}</label>
                <button onClick={() => props.getRoomName(name)}>Vælg</button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <input type={"radio"} name={"roomList"} />
            <label>{name}</label>
        </React.Fragment>
    )

}


