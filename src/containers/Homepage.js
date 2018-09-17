import React from 'react';

const Homepage = ({routeChange}) => {

	return (
		<div>
			<h1>Homepage</h1>
			<p>Group #1</p>
			<button onClick = {()=>routeChange('login')}>
			Login
			</button>
		</div>
		);
}

export default Homepage;


