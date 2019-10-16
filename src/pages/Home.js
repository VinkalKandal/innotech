import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
    Container,
    Col
} from 'reactstrap';
import { DynamicBoarderBtn, QuickDescription, OrangeLinkButton, NavDropdown, FooterComp, HomeBannerComp } from '../utils/functionComponents'

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

    }
    state = {
        isOpen: false
    };
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

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
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="#">Advertising</NavLink>
                                        </NavItem>
                                        <NavDropdown
                                            title="ImmoSnapp Pages"
                                            options={['ImmoSnapp Pages Best Practices',
                                                'Career Pages',
                                                'Employee Advocacy',
                                                'Showcase Pages',
                                                'ImmoSnapp Pages Support'
                                            ]} />
                                        <NavDropdown
                                            title="Resources"
                                            options={['Success Hub',
                                                'Ad Tips & Best Practices',
                                                'Brand Awareness',
                                                'Lead Generation',
                                                'Insights & Research'
                                            ]} />
                                        <NavDropdown
                                            title="Customer Stories"
                                            options={['Technology',
                                                'Higher Education',
                                                'Nonprofits & Advocacy',
                                                'Financial Services'
                                            ]} />
                                        <NavItem className="ad">
                                            <NavLink href="/login">Sign in</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Row>
                    </Container>

                </header>
                {/* <div className="banner-section">
                    <img src={require("../assets/images/megan-w-banner-v2-tab-landv02.jpg")} alt="banner" />
                    <div className="banner-content">
                        <Container>
                            <div className="banner-content-container">
                                <h1> Advertise on ImmoSnapp </h1>
                                <p> Reach your ideal customers on the world's largest professional network </p>
                                <div className="banner-actions">
                                    <NavLink className=" banner-action " href="">Create ad</NavLink>
                                    <NavLink className=" banner-action " href="/">Manage ads</NavLink>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div> */}
                <HomeBannerComp />
                <div className="section parbase-section">
                    <Container>
                        <h4>Advertising on ImmoSnapp helps businesses of any size achieve their goals.</h4>
                        <Row>

                            <Col sm="12" md="4">
                                <QuickDescription
                                    title="Target a unique audience"
                                    preText="Over"
                                    sublink="#"
                                    subLinkText=" 630M active professionals"
                                    text=" are on ImmoSnapp. Target them by job title, function, industry, and more."
                                    link="#"
                                    image={require("../assets/images/0022_icon-profile-view-72pxv02.png")}
                                    linkTxt="View all targeting options"
                                />
                            </Col>
                            <Col sm="12" md="4">
                                <QuickDescription
                                    title="Create easy and effective ads"
                                    preText=""
                                    text="Whether your goal is leads, brand awareness, or even event registrations, ImmoSnapp ads can help."
                                    link="#"
                                    image={require("../assets/images/0003_icon-success-alert-72pxv02.png")}
                                    linkTxt="How people see ads"
                                />
                            </Col>
                            <Col sm="12" md="4">
                                <QuickDescription
                                    title="Control your budget and costs"
                                    preText="Over"
                                    sublink="#"
                                    subLinkText=" 630M active professionals"
                                    text=" Control your spend with flexible pricing options. Start with any budget and stop your ads at any time."
                                    link="#"
                                    image={require("../assets/images/0036_icon-browser-dashboard-72pxv02.png")}
                                    linkTxt="How ads are priced"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="create-Title ">
                    <h4>Create an ad in minutes</h4>
                </div>
                <div className="create-ad ">
                    <img src={require("../assets/images/2-lms-spon-content.jpg")} alt="bg-img" />
                    <div className="cnt-section">
                        <Container>
                            <Row>
                                <Col sm="12" md="6">
                                </Col>
                                <Col sm="12" md="6">
                                    <DynamicBoarderBtn link="#" text="SPONSORED CONTENT" />
                                    <div className="bottom-contect">
                                        <h2>Boost your content across devices</h2>
                                        <p>Promote your company updates to targeted audiences on desktop, mobile, and tablet. Drive awareness and leads in the world's most viewed professional news feed.</p>
                                        <OrangeLinkButton link='#' linkTxt='SPONSORED CONTENT' />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="create-ad ">
                    <img src={require("../assets/images/2-lms-inmail.jpg")} alt="bg-img" />
                    <div className="cnt-section">
                        <Container>
                            <Row>
                                <Col sm="12" md="6">
                                    <DynamicBoarderBtn link="#" text="SPONSORED INMAIL" />
                                    <div className="bottom-contect">
                                        <h2>Deliver personalized ads to the ImmoSnapp inbox</h2>
                                        <p>Reach your target audiences right in the ImmoSnapp inbox. Deliver personalized messages that drive more conversions than email.</p>
                                        <OrangeLinkButton link='#' linkTxt='Learn about Sponsored InMail' />
                                    </div>
                                </Col>
                                <Col sm="12" md="6">
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="create-ad ">
                    <img src={require("../assets/images/2-lms-text-ads.jpg")} alt="bg-img" />
                    <div className="cnt-section">
                        <Container>
                            <Row>
                                <Col sm="12" md="6">
                                </Col>
                                <Col sm="12" md="6">
                                    <DynamicBoarderBtn link="#" text="TEXT ADS" />
                                    <div className="bottom-contect">
                                        <h2>Start generating leads in minutes</h2>
                                        <p>Add a compelling headline, description and even a 50x50 image. Easy setup means you can start reaching your target audience in minutes.</p>
                                        <OrangeLinkButton link='#' linkTxt='Learn about Text Ads' />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="create-Title ">
                    <h4>Ads for any budget and goal
                        <span>Set up payment in minutes. All you need is a credit card.</span>
                    </h4>
                </div>
                <div className="section parbase-section goal">
                    <Container>
                        <Row>

                            <Col sm="12" md="4">

                                <QuickDescription
                                    title="Bid for your target audience"
                                    preText=""
                                    sublink="#"
                                    subLinkText=""
                                    text="ImmoSnapp ads are sold by auction. You bid against other advertisers trying to reach the same audience."
                                    link="#"
                                    image={require("../assets/images/ad-auction.png")}
                                    linkTxt=""
                                />
                            </Col>
                            <Col sm="12" md="4">
                                <QuickDescription
                                    title="Choose your pricing"
                                    preText=""
                                    sublink="#"
                                    subLinkText=""
                                    text="Choose from CPC or CPM pricing. Or choose Sponsored InMail and only pay when your message is delivered."
                                    link="#"
                                    image={require("../assets/images/ad-pricing-model.png")}
                                    linkTxt=""
                                />
                            </Col>
                            <Col sm="12" md="4">
                                <QuickDescription
                                    title="Control your costs"
                                    preText=""
                                    sublink="#"
                                    subLinkText=""
                                    text="Set your own budget, bid, and schedule. Start with any budget and stop your ads at any time."
                                    link="#"
                                    image={require("../assets/images/budget-schedule.png")}
                                    linkTxt=""
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="section business-section">
                    <Container>
                        <Row>
                            <h3>Grow your business with targeted ads on ImmoSnapp</h3>
                            <button className="">Create ad</button>
                        </Row>
                    </Container>
                </div>
                <FooterComp />
            </div >
        )
    }
}

export default Home;