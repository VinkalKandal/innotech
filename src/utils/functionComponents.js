import React from 'react';
import {
    // Row,
    // Container,
    // ListGroup,
    // ListGroupItem,
    // Button,
    // Form,
    Card, CardImg, CardText, CardBody, CardTitle,
    FormGroup,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Container,
    NavLink,
    ListGroup, ListGroupItem,
    UncontrolledAlert
} from 'reactstrap';
import { Link } from 'react-router-dom';
var Chart = require("chart.js");


export const DropDown = () => {
    const greeting = 'Hello Function Component!';
    return <h1>{greeting}</h1>;
}

// ------- Chart -------

export const ChartComp = (displayArr, tempNode) => {
    const node = tempNode;
    new Chart(node, {
        type: 'line',
        data: {
            labels: ['Jan.2013', 'Feb.2013', 'Mar.2013', 'Apr.2013', 'May.2013', 'Jun.2013', 'Jul.2013', 'Aug.2013', 'Sep.2013', 'Oct.2013', 'Nov.2013', 'Dec.2013',
                'Jan.2014', 'Feb.2014', 'Mar.2014', 'Apr.2014', 'May.2014', 'Jun.2014', 'Jul.2014', 'Aug.2014', 'Sep.2014', 'Oct.2014', 'Nov.2014', 'Dec.2014',
                'Jan.2015', 'Feb.2015', 'Mar.2015', 'Apr.2015', 'May.2015', 'Jun.2015', 'Jul.2015', 'Aug.2015', 'Sep.2015', 'Oct.2015', 'Nov.2015', 'Dec.2015',
                'Jan.2016', 'Feb.2016', 'Mar.2016', 'Apr.2016', 'May.2016', 'Jun.2016', 'Jul.2016', 'Aug.2016', 'Sep.2016', 'Oct.2016', 'Nov.2016', 'Dec.2016',
                'Jan.2017', 'Feb.2017', 'Mar.2017', 'Apr.2017', 'May.2017', 'Jun.2017', 'Jul.2017', 'Aug.2017', 'Sep.2017', 'Oct.2017', 'Nov.2017', 'Dec.2017',
                'Jan.2018', 'Feb.2018', 'Mar.2018', 'Apr.2018', 'May.2018', 'Jun.2018', 'Jul.2018', 'Aug.2018', 'Sep.2018', 'Oct.2018', 'Nov.2018', 'Dec.2018',
                'Jan.2019', 'Feb.2019', 'Mar.2019', 'Apr.2019', 'May.2019', 'Jun.2019'],
            datasets: [{
                label: 'Value Units',
                fill: false,
                backgroundColor: "#f66284",
                borderColor: "#f66284",
                data: displayArr
            }
            ]
        },
        options: {
            // responsive: true,
            title: {
                display: true,
                text: 'Chart with Multiline Labels'
            },
        }
    });
    return <div>
        <canvas
            style={{ width: 800, height: 300 }}
            // ref={node => (this.node = tempNode)}
        />
    </div>
}

// ------ Input Field --------

export const InputComp = ({ type, name, placeholder, required, value }) => {
    //----using hooks----
    // const [email, setInpulValue] = useState('')
    // const inputValFunc = ({ target: { value } }) => {
    //     setInputVal(value)
    // }
    return <FormGroup>
        <Input
            type={type}
            name={name}
            placeholder={placeholder}
            // onChange={(e) => { setInpulValue(value) }}
            required={required}
        />
    </FormGroup>
}

// ------ Dynamic Link Button On Home Page ------
export const DynamicBoarderBtn = (props) => {
    const { link, text } = props
    return <div className="full-rich-text">
        <p className="text-center rich-text">
            <Link className="top-section" to={link}><span>{text}</span></Link>
        </p>
    </div>
}

//------ QuickDescription on home page -------
export const QuickDescription = (props) => {
    const {
        title,
        preText,
        sublink,
        subLinkText,
        text,
        link,
        image,
        linkTxt } = props
    return <Card>
        <CardImg src={image} alt="Card image cap" />
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{preText}{subLinkText ? <Link to={sublink}>{subLinkText}</Link> : ''}{text}</CardText>
            {linkTxt ? <OrangeLinkButton link={link} linkTxt={linkTxt} /> : ''}
        </CardBody>
    </Card>
}

// ------ Orange Link Button -------
export const OrangeLinkButton = (props) => {
    const { link, linkTxt } = props
    return <Link className="card-btn" to={link}>{linkTxt}</Link>
}

// ------ Navigation Dropdown (Uncontrolled) ------
export const NavDropdown = (props) => {
    const { title, options } = props
    return <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>{title}</DropdownToggle>
        <DropdownMenu right>
            {options.map((option, i) => { return <DropdownItem key={i}>{option}</DropdownItem> })}
        </DropdownMenu>
    </UncontrolledDropdown>
}

// ------ Footer ------
export const FooterComp = (props) => {
    return <footer>
        <Container>
            <Row>
                <p><Link to="#">More marketing and advertising solutions</Link></p>
                <ListGroup>
                    <ListGroupItem tag="a" href="/about">About</ListGroupItem>
                    <ListGroupItem tag="a" href="/cookie-policy">Cookie Policy</ListGroupItem>
                    <ListGroupItem tag="a" href="/privacy-policy">Privacy Policy</ListGroupItem>
                    <ListGroupItem tag="a" href="/user-agreement">User Agreement</ListGroupItem>
                    {/* <ListGroupItem tag="a" href="#">Sitemap</ListGroupItem> */}
                </ListGroup>

            </Row>
        </Container>
        <p className="copy-right">© ImmoSnapp Corporation 2019</p>
    </footer>
}

// ------ Banner ------
export const BannerComp = (props) => {
    const { title } = props
    return <div className="inner-banner">
        <Container >
            <h1 className="text-left">{title}</h1>
        </Container>
    </div>
}

// ------ Home banner ------
export const HomeBannerComp = (props) => {
    // const { } = props
    return <div className="banner-section">
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
    </div>
}

// ------ Notification ------
export const AlertComp = (props) => {
    const { text, linkText, link, color } = props;
    return <UncontrolledAlert color={color} fade={true}>
        {text} < a href={link} className="alert-link" > {linkText}</a>
    </UncontrolledAlert >
}

// ------ Banner Image ------
export const ImageBanner = (props) => {
    const { heading, imageSrc, text } = props
    return <div className="header__content ">
        <h1>{heading}</h1>
        <img src={imageSrc} alt="logo" />
        <p>{text}</p>
    </div>
}