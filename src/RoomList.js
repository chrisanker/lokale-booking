import React from "react";
import { Room } from "./Room";

export class RoomList extends React.Component {
    render() {
        const meetingRooms = ['Meeting Room 1','Meeting Room 2','Meeting Room 3','Meeting Room 4']
        const final = [];
        for (let i = 0; i < meetingRooms.length; i++){
            final.push(<li><Room name={meetingRooms[i]} /></li>);
        }
        return (
            <React.Fragment>
                <h2>Ledige lokaler</h2>
                <ul className="room-list-container">
                    {final}
                </ul>
            </React.Fragment>
        )
    }
    }