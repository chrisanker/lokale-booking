import React from "react";

export function RoomList({ availableRooms }) {
    return (
        <React.Fragment>
            <h2>Ledige lokaler</h2>
            <ul className="room-list-container">
                {availableRooms}
            </ul>
        </React.Fragment>
    )
}
