import React from "react";
import { SelectDate } from "./Datepicker";
import './SearchPage.css'

export class SearchPage extends React.Component{
    
    state = {
        isDatePickerVisible: false
    }

    handleUpdate = () => {
        if (this.state.isDatePickerVisible) {
            this.setState({isDatePickerVisible: false})
        }
        else {
            this.setState({isDatePickerVisible: true})
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hvad vil du booke?
                </h1>
                <div className="grid-container">
                    <div className="grid-item-1" onClick={this.handleUpdate}>
                        <img src="https://static.thenounproject.com/png/1211373-200.png" alt="Meeting room icon"/><br/>
                        Mødelokale
                    </div>
                    <div className="grid-item-2" onClick={this.handleUpdate}>
                        <img src="https://thumbs.dreamstime.com/b/aaiae-137315496.jpg" alt="Meeting room equipment icon"/><br/>
                        Udstyr til mødelokale
                    </div>
                </div>
                <div id="datepicker">
                    {this.state.isDatePickerVisible ? <SelectDate /> : null}
                </div>
            </div>
        )
    }
}