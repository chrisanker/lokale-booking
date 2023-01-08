import React from "react";
import { Room } from "./Room";

export function RoomList() {
    const roomCount = 4;
    return (
            <React.Fragment>
                <h2>Ledige lokaler</h2>
                <ul className="room-list-container">
                    <li><Room /></li>
                    <li>Meeting Room 2</li>
                    <li>Meeting Room 3</li>
                    <li>Meeting Room 4</li>
                </ul>
            </React.Fragment>
        )
    }