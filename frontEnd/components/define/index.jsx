"use strict";
import React from 'react';

class DefineWorkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {view: "define"};
        this._onNav = this._onNav.bind(this);
    }

    render(){
        return(
            <div id="defineWorkouts" >
                <h2>Define Workout</h2>
                <label htmlFor="defineName">Define Name
                    <input type="text" id="defineName" />
                </label>
                <label htmlFor="defineType">Define Type
                    <input id="defineType" type="text" />
                </label>
                <label htmlFor="defineDesc">Description</label>
                <textarea id="defineDesc" ></textarea>
                <button id="saveDefinition">Save Definition</button>
            </div>
        )
    }
    _onNav( theView ) {
        this.setState( { view: theView });
    }
};

module.exports = DefineWorkout;