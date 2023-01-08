import React from "react";

export class Room extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            name: ''
        }
    }

    setName = (roomName) => {
        this.setState({
            name: {roomName}
        });
    }

    render() {
        return(
            <h5>Room Name: {this.state.name}</h5>
        )
    }
}