import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FooterComp, InputComp, HomeBannerComp } from '../utils/functionComponents'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signUpUser } from '../appRedux/actions/authActions'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.signUpResp !== prevProps.signUpResp) {
        }
        if (this.props.signUpResp !== prevProps.signUpResp) {
        }
    }
    componentDidMount() {
        this.props.signUpUser()
    }
    _handleValue = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    _handleSignup = e => {
        e.preventDefault()
        console.log(this.state)
    }
    setValue = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <HomeBannerComp />
                {/* <ImageBanner
                    heading="Welcome"
                    imageSrc={require("../assets/images/logo.png")}
                    text="Don't miss your next opportunity. Sign in to stay updated on your professional world." /> */}
                <div className="login-wrp">
                    {/* <div className="header__content ">
                        <img src={require("../assets/images/logo.png")} alt="logo" />
                        <p>Make the most of your professional life</p>
                    </div> */}
                    <div className="form_wrp">
                        <Form onSubmit={this._handleSignup}>
                            <InputComp type="text" name="firstName" placeholder="First name" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <InputComp type="text" name="lastName" placeholder="Last name" inputValFunc={(e) => this.setValue(e)} required={false} />
                            <InputComp type="email" name="email" placeholder="Email" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <InputComp type="password" name="password" placeholder="Password" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <Button className="btn__primary--large" type="submit">Agree & Join</Button>
                        </Form>
                        {/* <div className="third-party-btn-container">
                            <p className="reg-option">
                                <span className="line-wrapper">
                                </span>
                                <span className="content">
                                    or
                                </span>
                            </p>
                            <button type="button" className="fb-btn" data-position-facebook="bottom">
                                <svg version="1.1" id="Capa_1"   x="0px" y="0px" viewBox="0 0 455.73 455.73" >
                                    <path  d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
                                    h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"/>
                                </svg>
                                Continue with Facebook
                                </button>
                        </div> */}
                        <div className="footer__content ">
                            <p>Already on ImmoSnapp?
                                <Link to="/login">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <FooterComp />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpResp: state.auth.signUpUser
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signUpUser
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));