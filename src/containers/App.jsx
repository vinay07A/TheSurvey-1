import React, { Component } from 'react';
import Homepage from './Homepage';
import Login from './Login';
import Survey from './Survey';
import Register from './Register';
import Reset from './Reset';

class App extends Component {
constructor() {
    super();
    this.state = {
    	route : 'homepage',
    }
  }


routeChange = (route) => {
	this.setState({route});
  }

render() {

	if (this.state.route === 'homepage') {
		//first page users see
		//Group #1
		return (
				<Homepage routeChange = {this.routeChange}
				/>
				);
	} else if (this.state.route === 'login') {
		//login page
		//Group #2
		return (
				<Login routeChange = {this.routeChange}
				/>
				);
	} else if (this.state.route === 'survey') {
		//when users login successfully they will see this page
		//Group #4
		return (
				<Survey />
				);
	} else if (this.state.route === 'register') {
		//link to register page
		//Group #3
		return (
				<Register />
				);
	} else if (this.state.route === 'reset') {
		//link to reset page
		//Not assigned yet
		return (
				<Reset />
				);
	}
  }
}

export default App;