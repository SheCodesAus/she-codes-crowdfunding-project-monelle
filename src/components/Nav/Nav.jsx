import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Nav.css";


function Nav() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    }

    const handleSignOut = () => {
        window.localStorage.removeItem("token")
        navigateToLogin()
    }

    const checkUser = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        // console.log("isUserLoggedIn", isUserLoggedIn)

        return isUserLoggedIn
            ? <button onClick={handleSignOut} className="button">Log out</button>
            : <button onClick={navigateToLogin} className="button">Login</button>
    }


    return (
        <section className="navbar">
            <nav className="left-menu">
                <Link className="button" variantcolor="#fff" to="/">Home </Link>
                <Link className="button" to="/projects/">Projects </Link>
            </nav>
            <nav className="right-menu">
            <Link className="button" to="/search/">Search </Link>
            {/* <Link className="button" to="/login/">Log in </Link> */}
            {checkUser()}
            </nav>
        </section>

    );
}

export default Nav;
