import React, { Component } from 'react';
import Homepage from './homecontainers/Homepage';
import Survey from './surveycontainers/Survey';

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
		return <Homepage routeChange = {this.routeChange}/>
	} else if (this.state.route === 'survey') {
		return <Survey />
	}
  }
}

export default App;