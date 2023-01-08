import React from "react";

export class Room extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            name: 'Room name',
        }
    }
    render() {
        const name = this.props.name;
        return(
            <React.Fragment>
                <h5>Room Name: {this.name}</h5>
            </React.Fragment>
        )
    }
}