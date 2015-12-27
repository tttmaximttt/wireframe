"use strict";
import React from 'react';
var Nav = require("../navigation/index.jsx");
var DefineWorkout = require("../define/index.jsx");
var StoreWorkout = require("../store/index.jsx");
var History = require("../history/index.jsx");

class WorkoutLog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {view: "define"};
        this._onNav = this._onNav.bind(this);
    }

    render(){
        return(
            <div>
                <h1>Workout Log</h1>
                <Nav onLogout={this.props.onLogout} onNav={this._onNav}/>
                {this.state.view === "define" ?<DefineWorkout /> : "" }
                {this.state.view === "store" ? <StoreWorkout /> : ""}
                {this.state.view === "history" ? <History /> : ""}
            </div>
        )
    }
    _onNav( theView ) {
        this.setState( { view: theView });
    }
};

module.exports = WorkoutLog;