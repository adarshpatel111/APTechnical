import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.png'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            {/* fixed-top */}
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo"/>
                        {/* AP Technical */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-1 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={onclick ? "nav-link active" : "nav-link"}
                                    aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={onclick ? "nav-link active" : "nav-link"}
                                    to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={onclick ? "nav-link active" : "nav-link"}
                                    to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={onclick ? "nav-link active" : "nav-link"}
                                    to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
