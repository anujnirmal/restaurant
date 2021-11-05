import { logDOM } from "@testing-library/react";
import React from "react";
import logo from  "../assets/logo.svg";

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <img src={logo} alt="logo" className="header-logo" />
                        <ul className="top-menu">
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Contact Us</li>
                        </ul>
                </div>
            </header>
            <div className="header-bot"></div>
        </div>
    );
}

export default Header;