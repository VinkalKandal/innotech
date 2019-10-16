import React, { Component } from 'react';
import {
    Button, Form
} from 'reactstrap';
import { InputComp, FooterComp } from "../utils/functionComponents"
class Login extends Component {
    state = {
        email: ''
    }

    setValue(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                {/* <ImageBanner
                    heading="Welcome"
                    imageSrc={require("../assets/images/logo.png")}
                    text="Don't miss your next opportunity. Sign in to stay updated on your professional world." /> */}
                <div className="login-wrp">
                    <div className="header__content ">
                        <img src={require("../assets/images/logo.png")} alt="logo" />
                        <h1>Forgot Password</h1>
                        <p>Please enter your email or phone</p>
                    </div>
                    <div className="form_wrp">
                        <Form onSubmit={this.handleSubmit} >
                            <InputComp type="email" name="email" placeholder="Enter your email or phone" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <Button className="btn__primary--large" type="submit">Reset my Password</Button>
                        </Form>
                    </div>
                </div>
                <FooterComp />
            </div >
        )
    }
}

export default Login;