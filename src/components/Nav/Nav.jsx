import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Nav.css";


function Nav() {
    return (
        <section className="navbar">
            <nav className="left-menu">
                <Link className="button" variantcolor="#fff" to="/">Home </Link>
                <Link className="button" to="/projects/">Projects </Link>
            </nav>
            <nav className="right-menu">
            <Link className="button" to="/search/">Search </Link>
            <Link className="button" to="/login/">Log in </Link>
            </nav>
        </section>
    );
}

export default Nav;
