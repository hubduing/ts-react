import React from "react";
import '../assets/vendor/bootstrap.bundle.min';

const Header = () => {
    return (
        <header className="header-section">
            <nav className="navbar navbar-expand-xl navbar-light bg-light" aria-label="Sixth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./images/logo.png" alt="logo" width="160" height="36"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample06">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Electric Skateboards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Electric Scooters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">More Info</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown06" data-bs-toggle="dropdown"
                                   aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown06">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-center">
                            <form>
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                            <ul className="navbar__setting d-flex">
                                <li className="nav-item nav-icon m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </li>
                                <li className="nav-item nav-icon m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;
