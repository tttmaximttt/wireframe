"use strict";

import React from 'react'
var SignIn = require('../singin/index.jsx');
var CreateAccount = require('../createAccount/index.jsx');
//import CreateAccount from 'createAccount/index.jsx'

class Authentication extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }
  render(){
      return(
          <div>
              <SignIn onAuthComplete={this.props.onAuthComplete}/>
              <CreateAccount onAuthComplete={this.props.onAuthComplete}/>
          </div>
      )
  }
};

module.exports = Authentication;