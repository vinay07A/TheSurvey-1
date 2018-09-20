import React from 'react';

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