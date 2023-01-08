import React from "react";
import { Room } from "./Room";

export class RoomList extends React.Component {
    render() {
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
    }