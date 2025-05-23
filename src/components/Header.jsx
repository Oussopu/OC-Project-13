import React from "react";
import argentBankLogo from "../assets/img/argentBankLogo.png";

const Header = ({ isAuthenticated, username }) => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {isAuthenticated ? (
                    <>
                        <a className="main-nav-item" href="/profile">
                            <i className="fa fa-user-circle"></i>
                            {username}
                        </a>
                        <a className="main-nav-item" href="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </>
                ) : (
                    <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                )}
            </div>
        </nav>
    );
};

export default Header;
