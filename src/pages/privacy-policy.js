import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Row,
    Container,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Col,
    ListGroup, ListGroupItem
} from 'reactstrap';
import { FooterComp, BannerComp } from '../utils/functionComponents'
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div>
                {/* H E A D E R   S E C T I O N */}
                <header>
                    <Container>
                        <Row>
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="/">
                                    <img src={require("../assets/images/logo.png")} alt="logo" />
                                </NavbarBrand>
                                <Collapse navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem className="">
                                            <NavLink href="/login">Login</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="" navbar>
                                        <NavItem className="ad">
                                            <NavLink href="/signp">Sign in</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Row>
                    </Container>
                </header>
                <BannerComp title="Privacy Policy" />
                {/* <div className="banner-section about-banner">
                    <img src={require("../assets/images/megan-w-banner-v2-tab-landv02.jpg")} alt="banner" />

                    <div className="banner-content">
                        <Container>
                            <Row>


                                <Col sm="12" md="6" className="about-cnt-stn">
                                    <div className="banner-content-container text-left">
                                        <h1>About ImmoSnapp IMMO SNAPP</h1>
                                        <p>Welcome to ImmoSnapp, the world's largest professional network with more than 645+ million users in more than 200 countries and territories worldwide.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div> */}

                < div className="about-section" >
                    <Container>
                        <Row>
                            <Col sm="12" md="8" className="text-left">
                                <p><i>Effective on May 8, 2018</i></p>
                                <p className="mb-30"> <Link to="#">Lorem Ipsum is</Link> simply dummy text of the printing and typesetting industry.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                                <h4>Does ImmoSnapp use cookies?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </Col>

                            <Col sm="12" md="4" className="sidenav-toc">
                                <ListGroup>
                                    <h3>Table of Contents:</h3>
                                    <ListGroupItem tag="a" href="#">Introduction</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Data We Collect</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">How We Use Your Data</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">How We Share Information</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Your Choices & Obligations</ListGroupItem>
                                    <ListGroupItem tag="a" href="#">Other Important Information</ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                        <ListGroup className="text-left max-w100" >
                            <ListGroupItem>
                                <h4>Introduction</h4>
                                <p className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="aside-wrp">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h6>Services</h6>
                                <p className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="aside-wrp">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h6>Data Controllers and Contracting Parties</h6>
                                <p className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="aside-wrp">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>How We Share Information</h4>
                                <h6>3.1 Our Services</h6>
                                <p><strong>Profile</strong></p>
                                <p className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <ul className="lesting-wrp">
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                </ul>
                            </ListGroupItem>
                        </ListGroup>
                    </Container>
                </div >

                <div className="more-information">
                    <Container>
                        <ListGroup>
                            <ListGroupItem>For more information about our company:</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Company page</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Products and services</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Newsroom</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Company blog</ListGroupItem>
                        </ListGroup>
                    </Container>
                </div>
                <FooterComp />
            </div >
        )
    }
}

export default About;