import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getNumbers } from '../actions/getAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { isAuthenticated, logout } from '../helpers/auth';
import { useSelector } from 'react-redux';

function Footer(props) {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const handleLogout = () => {
        logout(() => {
            props.history.push('/');
        });
    }

    useEffect(() => {
        getNumbers();
    }, [])

    return (

        <div>
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3 img-logo">
                                <Link to="/">
                                    <img src={require("./images/logo-3.png")} alt="Pizzards logo" />
                                </Link>
                                <p className="text-secondary">Baked Italian pizzas at your fingertips. One thousand flavors in one place.</p>
                                <p className="text-secondary">Problems come and go, pizza is for ever.</p>
                                <p className="text-secondary"><i>Give in to the taste|.</i></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h4 className="mb-4 ph-fonts-style foot-title">
                                Recent Link
					</h4>
                            <ul className="ph-links-column">

                                {!isAuthenticated() && (
                                    <Fragment>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/"><span >Home</span></Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/signup"><span >Signup</span></Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/login"><span >Login</span></Link>
                                        </li>
                                    </Fragment>
                                )}
                                {isAuthenticated() && isAuthenticated().role === 0 && (
                                    <Fragment>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/user/dashboard"><span >Dashboard</span></Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/cart"><span >Cart</span></Link>
                                        </li>
                                    </Fragment>
                                )}
                                {isAuthenticated() && isAuthenticated().role === 1 && (
                                    <Fragment>

                                        <li>
                                            <Link className="nav-link js-scroll-trigger" to="/admin/dashboard"><span >Dashboard</span></Link>
                                        </li>
                                    </Fragment>
                                )}
                                {userInfo && isAuthenticated() && (
                                    <Fragment>
                                        <li>
                                            <Link className="nav-link js-scroll-trigger" onClick={handleLogout} ><span >Logout</span></Link>
                                        </li>
                                    </Fragment>
                                )}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h4 className="mb-4 ph-fonts-style foot-title">
                                Contact Us
					</h4>
                            <div className="cont-box-footer">
                                <div className="cont-line">
                                    <div className="icon-b">
                                        <i aria-hidden="true">
                                            <FontAwesomeIcon icon={faAddressCard} className="flaticon-review" />

                                        </i>

                                    </div>
                                    <div className="cont-dit">
                                        <p>75 Avenue Way St. Peters.</p>
                                    </div>
                                </div>
                                <div className="cont-line">
                                    <div className="icon-b">
                                        <i aria-hidden="true">
                                            <FontAwesomeIcon icon={faPhone} className="flaticon-review" />

                                        </i>

                                    </div>
                                    <div className="cont-dit">
                                        <p>+234 81 0962 2518</p>
                                    </div>
                                </div>
                                <div className="cont-line">
                                    <div className="icon-b">
                                        <i aria-hidden="true">
                                            <FontAwesomeIcon icon={faMailBulk} className="flaticon-review" />

                                        </i>

                                    </div>
                                    <div className="cont-dit">
                                        <p>idowuayanfeoluwa@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyrights">
                <div className="container-fluid">
                    <div className="footer-distributed">
                        <div className="footer-left">
                            <p className="footer-links">
                                {!isAuthenticated() && (
                                    <Fragment>
                                        <Link className="nav-link js-scroll-trigger" to="/"><span >Home</span></Link>
                                        <Link className="nav-link js-scroll-trigger" to="/signup"><span >Signup</span></Link>
                                        <Link className="nav-link js-scroll-trigger" to="/login"><span >Login</span></Link>
                                    </Fragment>
                                )}
                                {isAuthenticated() && isAuthenticated().role === 0 && (
                                    <Fragment>
                                        <Link className="nav-link js-scroll-trigger" to="/user/dashboard"><span >Dashboard</span></Link>
                                        <Link className="nav-link js-scroll-trigger" to="/cart"><span >Cart</span></Link>
                                    </Fragment>
                                )}
                                {isAuthenticated() && isAuthenticated().role === 1 && (
                                    <Fragment>

                                        <Link className="nav-link js-scroll-trigger" to="/admin/dashboard"><span >Dashboard</span></Link>
                                    </Fragment>
                                )}
                                {userInfo && isAuthenticated() && (
                                    <Fragment>
                                        <Link className="nav-link js-scroll-trigger" onClick={handleLogout} ><span >Logout</span></Link>
                                    </Fragment>
                                )}
                            </p>
                            <p className="footer-company-name">All Rights Reserved. &copy; 2021 <Link to="/">Pizzards</Link> Developed By:
					<Link to="https://devjo.netlify.app"> Dev-Jo</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></Link>
        </div>

    )
}

export default withRouter(Footer);