"use strict";

import React from 'react'

class List extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        var lis = this._renderItems(menus);
        return(
            <li>
                {this.props.name} - {this.props.result}
            </li>
        )
    }
};
var _mockHistory = [
    {
        "name": "Murph",
        "result": "32:18",
        "notes": "painful, but fun"
    },
    {
        "name": "Tabata Something Else",
        "type": "reps",
        "result": "421",
        "notes": ""
    }

];

class History extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        var hist = _mockHistory;
        var formatedLi = [];
        for(let item of hist){
            var histObj = { name: item.name, result:item.result };
            formatedLi.push(<List data={item}/>)
        }

        return(
            <div>
                <h2>History</h2>
                <ul>
                    {formatedLi}
                </ul>
            </div>
        )
    }
};

module.exports = History;