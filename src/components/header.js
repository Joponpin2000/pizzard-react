import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import Nav from 'react-bootstrap/Nav';
import { getNumbers } from '../actions/getAction';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    useEffect(() => {
        getNumbers();
    }, [])

    const handleLogout = () => {
        logout(() => {
            props.history.push('/');
        });
    }


    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container-fluid">
                <Link className="navbar-brand js-scroll-trigger" to="/">
                    <img className="img-fluid" src={require("./images/logo-3.png")} height="40" alt="Logo img" />
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <FontAwesomeIcon icon={faBars} className="flaticon-review text-secondary" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <Nav>
                            {!isAuthenticated() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/"><span className="text-white">Home</span></Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/signup"><span className="text-white">Signup</span></Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/login"><span className="text-white">Login</span></Nav.Link>
                                    </li>
                                </Fragment>
                            )}
                            {isAuthenticated() && isAuthenticated().role === 0 && (
                                <Fragment>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/user/dashboard"><span className="text-white">Dashboard</span></Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/cart"><span className="text-white">Cart</span></Nav.Link>
                                    </li>
                                </Fragment>
                            )}
                            {isAuthenticated() && isAuthenticated().role === 1 && (
                                <Fragment>

                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" to="/admin/dashboard"><span className="text-white">Dashboard</span></Nav.Link>
                                    </li>
                                </Fragment>
                            )}
                            {userInfo && isAuthenticated() && (
                                <Fragment>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link js-scroll-trigger" onClick={handleLogout} ><span className="text-white">Logout</span></Nav.Link>
                                    </li>
                                </Fragment>
                            )}
                        </Nav>
                    </ul>
                </div>
            </div>
        </nav>

    );

    return (
        // <header id="mu-header">
        showNavigation()
        // </header>
    );

}

export default withRouter(Header);