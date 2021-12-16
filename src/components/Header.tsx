import React from "react";

const Header = () => {
    return (
        <header className="header-section">
            <nav className="navbar navbar-expand-md navbar-light bg-light site-navbar">
                <a className="navbar-brand col-2" href="#">
                    <img src="./images/logo.png" alt="logo" width="160" height="36"
                         className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-8 text-left" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item mr-2">
                            <a className="nav-link" href="#">Electric Skateboards</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href="#">Electric Scooters</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href="#">Gift Card</a>
                        </li>
                        <li className="nav-item mr-2">
                            <a className="nav-link" href="#">More Info</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex col-2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </li>
                        <li className="nav-item nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;
