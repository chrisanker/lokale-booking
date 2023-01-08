import React from "react";

export function RoomList() {
    return (
            <React.Fragment>
                <h2>Ledige lokaler</h2>
                <ul className="room-list-container">
                    <li>Meeting Room 1</li>
                    <li>Meeting Room 2</li>
                    <li>Meeting Room 3</li>
                    <li>Meeting Room 4</li>
                </ul>
            </React.Fragment>
        )
    }