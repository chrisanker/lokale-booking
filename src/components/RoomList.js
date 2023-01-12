import React from "react";
import { Room } from "./Room";
import {Booking} from "./Booking";

export function RoomList() {
        const meetingRooms = [
            'Mødelokale 1',
            'Mødelokale 2',
            'Mødelokale 3',
            'Mødelokale 4'
        ];
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
                <Booking />
            </React.Fragment>
        )
}
