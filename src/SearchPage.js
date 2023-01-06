import React from "react";
import { SelectDate } from "./Datepicker";
import './SearchPage.css'

export class SearchPage extends React.Component{
    
    state = {
        isDatePickerVisible: false
    }

    handleUpdate = () => {
        this.setState({isDatePickerVisible: true})
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hvad vil du booke?
                </h1>
                <div className="grid-container" onClick={this.handleUpdate}>
                    <div className="grid-item-1">
                        <img src="https://static.thenounproject.com/png/1211373-200.png" alt="Meeting room icon"/><br/>
                        Mødelokale
                    </div>
                    <div className="grid-item-2">
                        <img src="https://thumbs.dreamstime.com/b/aaiae-137315496.jpg" alt="Meeting room equipment icon"/><br/>
                        Udstyr til mødelokale
                    </div>
                </div>
                <div>
                    {this.state.isDatePickerVisible ? <SelectDate /> : null}
                </div>
            </div>
        )
    }
}