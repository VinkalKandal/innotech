import React, { Component } from 'react';
import {
    Button, Form
} from 'reactstrap';
import { InputComp } from "../utils/functionComponents"
class Login extends Component {
    state = {
        password: '',
        confirmPassword: ''
    }

    setValue = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="login-wrp">
                    <div className="header__content ">
                        <img src={require("../assets/images/logo.png")} alt="logo" />
                        <h1>Choose a new password.</h1>
                        <p>Password must include at least 8 characters including at least 1 number or 1 special character.</p>
                    </div>
                    <div className="form_wrp">
                        <Form onSubmit={this.handleSubmit}>
                            <InputComp type="password" name="password" placeholder="New password" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <InputComp type="password" name="confirmPassword" placeholder="Retype new password" inputValFunc={(e) => this.setValue(e)} required={true} />
                            <Button className="btn__primary--large" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login;