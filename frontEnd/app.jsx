"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './components/auth/index.jsx'
import WorkoutLog from './components/workout/index.jsx'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {signedIn: false};
        this._onAuthComplete = this._onAuthComplete.bind(this);
        this._onLogout = this._onLogout.bind(this);
    }
    render(){
        return(
            <div>
                { this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> : <Authentication onAuthComplete={this._onAuthComplete}/> }
            </div>
        )

    }

    _onAuthComplete(result){
        if (result) {
            this.setState( { signedIn: true } );
        }
    }
    _onLogout(){
        this.setState( { signedIn: false } );
    }
}

ReactDOM.render(<App/>, document.getElementById("container"));