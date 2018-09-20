import React from 'react';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Reset from './Reset';

const Homepage = ({routeChange, route}) => {
	switch(route){
		case "homepage":
			return <Main routeChange={routeChange}/>
		case "login":
			return <Login routeChange={routeChange}/>
		case "signup" :
			return <Signup routeChange={routeChange}/>
		case "reset" :
			return <Reset routeChange={routeChange}/>
		default:
			return <p>Sorry. Wrong route</p>
	}
}

export default Homepage;