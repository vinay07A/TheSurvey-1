import React from 'react';

const Login = ({routeChange}) => {

	return (
		<div>
			<h1>Login Page</h1>

			<form className = "loginpage">
				<div style={{margin: "0.3rem 0"}}>
					<input type = "email" placeholder="Enter email" name = "email" required />
				</div>
				<div style={{margin: "0.3rem 0"}}>
					<input type = 'password' placeholder='Enter password' name = "password" required />
				</div>
				<div style={{margin: "0.7rem 0"}}>
					<button className = 'btn btn-primary' type = 'submit' onClick = {()=>routeChange('survey')}>Login</button>
				</div>
				<div>
					<span>Don't have an account?  <a className = 'link' onClick = {()=>routeChange('register')}>Register</a></span>
				</div>
				<div>
					<span>Forgot Password?  <a className = 'link' onClick = {()=>routeChange('reset')}>Reset</a></span>
				</div>
			</form>
		</div>
		);
}

export default Login;