import React from 'react';

const Login = ({routeChange}) => {

	return (
		<div>
		  <div> 
	        <nav className="navbar navbar-expand-lg navbar-navy bg-navy text-white d-flex justify-content-between">
	          <a className="navbar-brand ml-5" onClick = {()=>routeChange('homepage')}>Survey<span className='text-green'>Rocket</span>  <i className="fas fa-rocket text-green"></i></a>
	          <div className="collapse navbar-collapse login-register-button" id="navbarText">
	            <span className="navbar-text mr-5">
	              <button className="btn btn-outline-green" type="button" onClick={()=>routeChange("signup")}>Sign up</button>
	            </span>
	          </div>
	        </nav>
	      </div>

		  <div className="container mt-4 d-flex justify-content-center" style={{textAlign: "center"}}>

			<div className="card text-center" style={{width: "18rem"}}>
			  <div className="card-body">
			    <h3 className="card-title">Log in</h3>
				<div className="text-center text-white">
	            <a className="btn btn-primary btn-block"><i className="fab fa-facebook-f" style={{padding: "0 10px"}}></i> Sign in with <b>Facebook</b></a>
	            <a className="btn btn-info btn-block"><i className="fab fa-twitter" style={{padding: "0 10px"}}></i> Sign in with <b>Twitter</b></a>
				<a className="btn btn-danger btn-block"><i className="fab fa-google" style={{padding: "0 10px"}}></i> Sign in with <b>Google</b></a>
        		</div>
        		<div className="hrhrhr">
	        	or
	        	</div>
	        	<form onSubmit={()=>routeChange("survey")}>
				  <div className="form-group mb-1">
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				  </div>
				  <div className="form-group mb-1">
				    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				  </div>
					<div class="custom-control custom-checkbox mb-3">
					  <input type="checkbox" class="custom-control-input mb-1" id="customCheck1" />
					  <label class="custom-control-label " for="customCheck1">Remember me</label>
					</div>
				  <button type="submit" className="btn btn-navy btn-block">Submit</button>
				</form>

  			  </div>
			</div>
		
			
		  </div>
		</div>
		);
}

export default Login;