import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from './header';
import Footer from './Footer';

function CheckoutSteps(props) {
    return (
        <Fragment>
            <Header />
            <Row className="checkout-steps col-md-5 mx-auto mt-5">
                <Col className={props.step1 ? 'active' : ''}>Signin</Col>
                <Col className={props.step2 ? 'active' : ''}>Shipping</Col>
                <Col className={props.step3 ? 'active' : ''}>Payment</Col>
                <Col className={props.step4 ? 'active' : ''}>Place Order</Col>
            </Row>
            <Footer />
        </Fragment>
    )
}

export default CheckoutSteps;