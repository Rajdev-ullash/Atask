import React from 'react';

import './LoginSignUp.css'

const LoginSignUp = () => {


    const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });



    return (
        <div>
            <div className="Naviationbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="pic/g2.png" alt="" width="50" height="50" className="d-inline-block align-text-middle" /><b
                                className="asfag__display__none"
                                style={{ "font-size": "18px", "padding-left": "15px" }}>ACADEMY OF
                                SUSTAINABLE FINANCE, ACCOUNTING,
                                ACCOUNTABILITY & GOVERNANCE</b>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="index.html" id="nav-catagoary">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="About.html" id="nav-catagoary">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Governance
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="Company-Mission.html">Mission & Vision</a></li>
                                        <li><a className="dropdown-item" href="President-message.html">President message</a></li>
                                        <li><a className="dropdown-item" href="Executive Committee.html">Executive Committee</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Affiliates.html" id="nav-catagoary">Affiliates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Partner.html" id="nav-catagoary">Partners</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="ContactUs.html">Contact Us</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="nav-catagoary">Conference</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Webinar.html" id="nav-catagoary">Webinar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Login-Registration.html" id="nav-catagoary">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container" id="container" >
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 style={{"font-size": "25px"}}>Create Account</h1>
                        <input type="text" placeholder="Mr or Mrs" />
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Organization Name" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        {/* <h1 style={{"font-size": "35px", "position": "relative", "top": "5rem"}}>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#" style={{"text-decoration": "none"}}>Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Everyone!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginSignUp;