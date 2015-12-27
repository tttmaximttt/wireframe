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
                <a href="#" onClick={this.props.onNav.bind(null,this._nav(this.props.data.view))}>{this.props.data.text}</a>
            </li>
        )
    }
    _nav( view ) {
        return view;
    }
};


class Navigation extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        var menus = [
            {
                view:'define',
                text:'Define A Workout'
            },
            {
                view:'store',
                text:'Record A Workout'
            },
            {
                view:'history',
                text:'View History'
            }
        ];
        var list = [];
        for(let item of menus){
            list.push(<List data={item}/>)
        }
        return(
            <ul>
                {list}
                <li>
                    <a href="#" onClick={this.props.onLogout}>Logout</a>
                </li>
            </ul>
        )
    }
};

module.exports = Navigation;