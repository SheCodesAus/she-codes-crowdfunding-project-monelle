import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <Link to="/project">ProjectPage</Link>
        </nav>
    );
}

export default Nav;
