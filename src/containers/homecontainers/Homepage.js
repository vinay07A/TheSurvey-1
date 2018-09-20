import React from 'react';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const HomepageView = (routeChange, route) => {
	switch(route){
		case "homepage":
			return <Main routeChange={routeChange}/>
		case "login":
			return <Login routeChange={routeChange}/>
		case "register" :
			return <Register routeChange={routeChange}/>
		case "reset" :
			return <Reset routeChange={routeChange}/>
		default:
			return <p>Sorry. Wrong route</p>
	}
}


const Homepage = ({routeChange, route}) => {
	return (
		<div>
			<Header />
			{
				HomepageView(routeChange, route)
			}
		</div>
		);
}

export default Homepage;