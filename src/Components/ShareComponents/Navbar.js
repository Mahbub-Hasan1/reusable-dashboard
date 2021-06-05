import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Navbar = () => {
    const { setOpen, open } = React.useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MenuIcon
                        className="icons-color d-none_responsive"
                        onClick={() => setOpen(!open)}
                    />
                    <div className="navbar-brand mt-2 mt-lg-0" onClick={() => setOpen(!open)}>
                        <img
                            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                            height="15"
                            alt=""
                            loading="lazy"
                        />
                    </div>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/contactInfo">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <a className="text-reset me-3" href="/">
                        <i className="fas fa-shopping-cart icons-color" />
                    </a>

                    <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-bell icons-color" />
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="/">
                                Some news
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">
                                Another news
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">
                                Something else here
                            </a>
                        </li>
                    </ul>

                    <div
                        className="dropdown-toggle d-flex align-items-center hidden-arrow me-3"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                            className="rounded-circle"
                            height="25"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="/">
                                My profile
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/">
                                Logout
                            </a>
                        </li>
                    </ul>
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
