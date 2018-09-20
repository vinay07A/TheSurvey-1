import React from 'react';
import rocket from './img/project.png';

const rocket_img = {
  height: "50%"
}

const Main = ({routeChange}) => {

  return (
    <div>
      <div> 
        <nav className="navbar navbar-expand-lg navbar-navy bg-navy text-white">
          <a className="navbar-brand ml-5">Survey<span className='text-green'>Rocket</span>  <i className="fas fa-rocket text-green"></i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Pricing</a>
              </li>
            </ul>
            <span className="navbar-text mr-2">
              <button className="btn btn-outline-navy text-white" type="button" onClick={()=>routeChange("login")}>Log in</button>
            </span>
            <span className="navbar-text mr-5">
              <button className="btn btn-outline-green" type="button" onClick={()=>routeChange("signup")}>Sign up</button>
            </span>
          </div>
        </nav>
      </div>

      <div className="jumbotron jumbotron-fluid">

            <div className="container text-center">
            <div className="row text-center">
                <div className="col-lg-6 col-sm-12 text-center">
                  <h1 className="mb-5">Launch your survey</h1> 
                    <div class="d-flex">
                      <div class="p-2">
                        <i class="fas fa-rocket fa-2x"></i>
                      </div>
                      <div class="p-2">
                        Feature-rich platform
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="p-2">
                        <i class="fas fa-rocket fa-2x"></i>
                      </div>
                      <div class="p-2">
                        Business optimization
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="p-2">
                        <i class="fas fa-rocket fa-2x"></i>
                      </div>
                      <div class="p-2">
                        Task Aumomation
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img style={rocket_img} src = {rocket} alt="rocket"/>
                </div>
            </div>
            </div>

      </div>
      <div className="container text-center mb-20">
        How it works!
      </div>
        <footer className="bg-navy text-white">
          <div className="container">
            <div className="row">
              <div className="col text-center py-4">
                <h3>SurveyRocket</h3>
                <p>Copyright &copy; 2018</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
    );
}

export default Main;
