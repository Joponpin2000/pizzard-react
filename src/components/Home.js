import React, { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { sendMessage } from '../actions/contactAction';
import { listProducts } from '../actions/productActions';
import { server } from '../api/url';
import { showLoading } from '../helpers/loading';
import SideImage from './images/side.png';
import Header from './header';
import Footer from './Footer';
import Slider01 from "./images/slider-01.jpg";
import Slider02 from "./images/slider-02.jpg";
import Slider03 from "./images/slider-03.jpg";

const Home = (props) => {

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(listProducts());

    }, [dispatch]);

    const handleSubmit = e => {
        e.preventDefault();

        if (isEmpty(name) || isEmpty(email) || isEmpty(message) || !isEmail(email)) {
            return;
        }
        else {
            const formData = ({
                name,
                email,
                message
            })
            dispatch(sendMessage(formData));
        }
    };
    return (
        <Fragment>
            {
                loading ? (
                    <div className="text-center mx-5 my-5 py-5" > {showLoading()}</div>)
                    :
                    error ? (<div>{error}</div>) : (
                        <Fragment>
                            <Header />
                            <div className="mt-3 pt-5">
                                < div className="grey-bg">
                                    <section id="home" className="item slider-screen">
                                        <Carousel interval={3000} className="item slider-screen">
                                            <Carousel.Item clasasName="slider-new-2 owl-carousel owl-theme">
                                                <img className="d-block w-100 img-height slider-img-full" src={Slider01} alt="First slide" />
                                                <Carousel.Caption>
                                                    <div className="container">
                                                        <div className="slider-content text-white mb-5 pb-5">
                                                            <div className="in-box">
                                                                <h2>Awesome Pizza Restaurant</h2>
                                                                <p >..one thousand flavors in one place.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100 img-height" src={Slider02} alt="Second slide" />
                                                <Carousel.Caption>
                                                    <div className="container">
                                                        <div className="slider-content text-white mb-5 pb-5">
                                                            <div className="in-box">
                                                                <h2>Baked Delicious Pizzas</h2>
                                                                <p>..at your fingertips.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100 img-height" src={Slider03} alt="First slide" />
                                                <Carousel.Caption>
                                                    <div className="container">
                                                        <div className="slider-content text-white mb-5 pb-5">
                                                            <div className="in-box">
                                                                <h2>Welcome to Pizzards</h2>
                                                                <p>..one thousand flavors in one place.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </section>

                                    <div id="about" className="section lb">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="message-box">
                                                        <h2>Welcome To Pizzards Restaurant.</h2>
                                                        <p>Pizzards is a new player in the pizza restaurant industry.
                                                        Bolstere by the need for more choices in great tasting pizza experiences,
                                                        combined with the option for home-delivery, the restaurant is positioned
                                                               to take advantage of the market need and serve customers all over the world.</p>
                                                        <p>We look to provide the best possible value to our customers who desire great tasting pizza.
                                                            We've got you covered with menus from over 107 delicious pizzas online.</p>
                                                        <ul>
                                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                            <li>Nullam ut massa id odio imperdiet consequat.</li>
                                                            <li>Cras ullamcorper nisi eget condimentum aliquet. </li>
                                                            <li>Cras id libero iaculis, sodales ligula vitae, egestas odio.</li>
                                                            <li>Aenean congue ex et bibendum porta.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="right-box-pro wow fadeIn">
                                                        <img src={SideImage} alt="" className="img-fluid img-rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="section cont-box">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="inner-cont-box">

                                                        <h3 className="counter-number">5000</h3>
                                                        <h4>Client</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="inner-cont-box">
                                                        <h3 className="counter-number">3000</h3>
                                                        <h4>Time Of Work</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="inner-cont-box">
                                                        <h3 className="counter-number">2000</h3>
                                                        <h4>Ideas</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-xs-12">
                                                    <div className="inner-cont-box">
                                                        <h3 className="counter-number">8000</h3>
                                                        <h4>Project Done</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {products
                                        ?
                                        (
                                            <div id="menu" className="section lb">
                                                <div className="container-fluid">
                                                    <div className="section-title text-center">
                                                        <h3>Menu</h3>
                                                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                                                    </div>
                                                    <div className="row">
                                                        {
                                                            products.map((product, i) =>
                                                                (product && product.productImage !== undefined) && (

                                                                    <div className="col-md-3" key={i}>
                                                                        <div className="services-inner-box">
                                                                            <div className="ser-icon">
                                                                                <img src={server + "/" + product.productName + ".jpeg"} alt={product.productName} className="img-fluid" />
                                                                            </div>
                                                                            <h2>{product.productName}</h2>
                                                                            <Link to={"/product/" + product._id} className="hvr-radial-in" >$ {product.productPrice}</Link>
                                                                        </div>

                                                                    </div>
                                                                )
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        <div className="text-center mx-5 my-5 py-5" > {showLoading()}</div>
                                    }
                                </div >

                                <div id="chef" className="section wb">
                                    <div className="container-fluid">
                                        <div className="section-title text-center">
                                            <h3>Meet Our Team</h3>
                                            <p>The best in the business!</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="our-team">
                                                    <img src={require("./uploads/img-1.png")} alt="" />
                                                    <div className="team-content">
                                                        <h3 className="title">kristina</h3>
                                                        <span className="post">Senior Chef</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-6">
                                                <div className="our-team">
                                                    <img src={require("./uploads/img-2.png")} alt="" />
                                                    <div className="team-content">
                                                        <h3 className="title">
                                                            Williamson</h3>
                                                        <span className="post">Senior Chef</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-6">
                                                <div className="our-team">
                                                    <img src={require("./uploads/img-3.png")} alt="" />
                                                    <div className="team-content">
                                                        <h3 className="title">Miranda joy</h3>
                                                        <span className="post">Senior Chef</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-6">
                                                <div className="our-team">
                                                    <img src={require("./uploads/img-4.png")} alt="" />
                                                    <div className="team-content">
                                                        <h3 className="title">Steve Thomas</h3>
                                                        <span className="post">Senior Chef</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div id="contact" className="section db">
                                    <div className="container-fluid">
                                        <div className="section-title text-center">
                                            <h3>Contact</h3>
                                            <p>We've got you covered with menus from over 107 delicious pizzas online.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="contact_form">
                                                    <div id="message"></div>
                                                    <form id="contactForm" name="sentMessage" onSubmit={handleSubmit} noValidate>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input name="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Your Name" type="text" id="name" required="required" data-validation-required-message="Please enter your name." />
                                                                    <p className="help-block text-danger"></p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input id="email" type="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email address." name="email" onChange={(e) => setEmail(e.target.value)} className="form-control " />
                                                                    <p className="help-block text-danger"></p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <textarea id="message" placeholder="Your Message" required="required" data-validation-required-message="Please enter a message." name="message" onChange={(e) => setMessage(e.target.value)} className="form-control"></textarea>
                                                                    <p className="help-block text-danger"></p>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <div className="col-lg-12 text-center">
                                                                <div id="success"></div>

                                                                <div className="form-group">
                                                                    <button id="sendMessageButton" className="sim-btn hvr-radial-in  p-3" data-text="Send Message" type="submit">{loading && <span className="">
                                                                        <span className="pull-left text-dark">
                                                                            <span className="spinner-border spinner-border-sm" role="status">
                                                                                <span className="sr-only">Loading...</span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                    }{' '}Send Message</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Home;