
import React from 'react';

class SingIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this._doAuth = this._doAuth.bind(this)
    }
    render(){
        return(
            <div>
                <label htmlFor="username">Username
                  <input type="text" id="username" />
                </label>
                <label htmlFor="password">Password
                  <input type="password" id="password" />
                </label>
                <button id="signIn" onClick={this.props.onAuthComplete ? this.props.onAuthComplete.bind(null, this._doAuth):this._doAuth}>
                    Sign In
                </button>
            </div>
        )
    }
    _doAuth(){
        return true
    }
};

module.exports = SingIn;