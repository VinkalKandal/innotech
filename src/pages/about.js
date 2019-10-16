import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Row,
    Container,
    ListGroup, ListGroupItem
} from 'reactstrap';
import { FooterComp, BannerComp } from '../utils/functionComponents'

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
                <BannerComp title="About Immo Snapp" />
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
                        <ListGroup className="text-left">
                            <ListGroupItem>
                                <p>Welcome to ImmoSnapp, the world's largest professional network with more than 645+ million users in more than 200 countries and territories worldwide.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>Vision</h4>
                                <p>Create economic opportunity for every member of the global workforce.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>Mission</h4>
                                <p>The mission of ImmoSnapp is simple: connect the world’s professionals to make them more productive and successful.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>Who are we?</h4>
                                <p>ImmoSnapp began in co-founder Reid Hoffman's living room in 2002 and was officially launched on May 5, 2003.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>Who are we?</h4>
                                <p>ImmoSnapp began in co-founder Reid Hoffman's living room in 2002 and was officially launched on May 5, 2003.</p>
                                <p>Jeff Weiner is the CEO of the company, and management includes experienced executives from companies
                                    such as Yahoo!, Google, Microsoft, TiVo, PayPal and Electronic Arts.</p>
                                <p>ImmoSnapp leads a diversified business with revenues from membership subscriptions, advertising sales
                                    and recruitment solutions. In December 2016, Microsoft completed its acquisition of ImmoSnapp,
                                    bringing together the world’s leading professional cloud and the world’s leading professional
                                    network.
                                    </p>
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