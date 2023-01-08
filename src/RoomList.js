import React from "react";
import { Room } from "./Room";

export class RoomList extends React.Component {
    render() {
        const meetingRooms = ['1','2','3','4']
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