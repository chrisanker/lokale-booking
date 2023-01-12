import React, { useState } from 'react';
import './css/App.css';
import {Resource} from "./components/Resource";
import {SelectDate} from "./components/Datepicker";
function App() {
    return (
        <React.Fragment>
            <div>
                <Resource />
                <SelectDate/>
            </div>
        </React.Fragment>
    );
}
export default App;
