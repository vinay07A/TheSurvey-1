import React from 'react';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const Main = (routeChange) => {
	switch(routeChange){
		case "homepage":
			return <Main />
		case "login":
			return <Login />
		case "register" :
			return <Register />
		case "reset" :
			return <Reset />
		default:
			return <p>Sorry. Wrong route</p>
	}
}


const Homepage = ({routeChange}) => {
	return (
		<div>
			<Header />
			{
				Main(routeChange);
			}
		</div>
		);
}

export default Homepage;