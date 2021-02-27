import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function CheckoutSteps(props) {
    return (
        <Container>
            <Row className="checkout-steps mt-5 mx-auto">
                <Col sm="3" md="3" lg="3" xl="3" xs="3" className={props.step1 ? 'active' : ''}>Signin</Col>
                <Col sm="3" md="3" lg="3" xl="3" xs="3" className={props.step2 ? 'active' : ''}>Shipping</Col>
                <Col sm="3" md="3" lg="3" xl="3" xs="3" className={props.step3 ? 'active' : ''}>Payment</Col>
                <Col sm="3" md="3" lg="3" xl="3" xs="3" className={props.step4 ? 'active' : ''}>Order</Col>
            </Row>
        </Container>
    )
}

export default CheckoutSteps;