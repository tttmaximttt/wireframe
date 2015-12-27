"use strict";
import React from 'react';

class Option extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(<option>{this.props.value}</option>)
    }
};
var _mockWorkouts = [
    {
        "name": "Murph",
        "type": "fortime",
        "description": "Run 1 Mile \n 100 pull-ups \n 200"
    },
    {
        "name": "Murph",
        "type": "fortime",
        "description": "Run 1 Mile \n 100 pull-ups \n 200"
    }

];
class StoreWorkout extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var opts = [];
        for (let item of _mockWorkouts) {
            opts.push(<Option value={item.name}/>);
        }
        return(
            <div id="logWorkout" class="tabview">
                <h2>Record Workout</h2>
                <label htmlFor="chooseWorkout">Workout:</label>
                <select name="" id="chooseWorkout">
                    {opts}
                </select>
                <label htmlFor="workoutResult">Result:</label>
                <input id="workoutResult" type="text" />
                <input id="workoutDate" type="date" />
                <label htmlFor="notes">Notes:</label>
                <textarea id="notes"></textarea>
                <button>Store</button>
            </div>
        )
    }
};

module.exports = StoreWorkout;