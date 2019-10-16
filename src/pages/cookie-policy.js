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
                <BannerComp title="Cookie Policy" />
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
                                <p><i>Effective on May 8, 2018</i></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>Does ImmoSnapp use cookies?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>What is a cookie?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>When does ImmoSnapp place cookies?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>What types of cookies does ImmoSnapp use?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <h4>What are cookies used for?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <table className="section-table">
                                    <tbody>
                                        <tr>
                                            <th>Categories of Use</th>
                                            <th>Description</th>
                                        </tr>
                                        <tr>
                                            <td>Authentication</td>
                                            <td>If you’re signed in to ImmoSnapp, cookies help us show you the right information and personalize your experience.</td></tr><tr><td>Security</td><td>We use cookies to enable and support our security features, and to help us detect malicious activity and violations of our User Agreement.</td></tr><tr><td>Preferences, features and services</td><td>Cookies can tell us which language you prefer and what your communications preferences are. They can help you fill out forms on ImmoSnapp more easily. They also provide you with features, insights, and customized content in conjunction with our plugins. You can learn more about plugins in our Privacy Policy.</td></tr><tr><td>Advertising</td><td>We may use cookies to show you relevant advertising both on and off the ImmoSnapp site. We may also use a cookie to learn whether someone who saw an ad later visited and took an action (e.g. downloaded a white paper or made a purchase) on the advertiser’s site. Similarly, our partners may use a cookie to determine whether we’ve shown an ad and how it performed, or provide us with information about how you interact with ads. We may also work with a partner to show you an ad on or off ImmoSnapp, such as after you’ve visited a partner’s site or application.</td></tr><tr><td>Performance, Analytics and Research</td><td>Cookies help us learn how well our site and plugins perform in different locations. We also use cookies to understand, improve, and research products, features, and services, including when you access ImmoSnapp from other websites, applications, or devices such as your work computer or your mobile device.</td>
                                        </tr>
                                    </tbody>
                                </table>
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