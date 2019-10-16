import React, {
    useState,
    // useEffect,
    // Component
} from 'react';
import { connect } from 'react-redux';
import {
    Button, Form
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { signInUser } from '../appRedux/actions/authActions'
import { Link, withRouter } from 'react-router-dom';
import { InputComp, FooterComp, HomeBannerComp } from '../utils/functionComponents'
// class Login extends Component {
// constructor() {
//     super()
//     this.state = {
//         email: '',
//         password: '',
//         count: 0
//     }
// }
// handleValues = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value })
// }
// onChangeValue = (e) => {
// }
// inputValFunc(e) {
// }
// setValue(e) {
//     const { name, value } = e.target
//     console.log("setValue", name, value)
//     this.setState({ [name]: value })
// }


const Login = () => {
    const [name] = useState('')
    const [email, setEmail] = useState('')
    const [
        // password,
        setPassword] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <HomeBannerComp />
            <div className="login-wrp">
                <div className="header__content ">
                    <h1>Welcome</h1>
                    <img src={require("../assets/images/logo.png")} alt="logo" />
                    <p>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
                </div>
                <div className="form_wrp">
                    <Form onSubmit={handleLogin}>
                        {/* {console.log("dfdsg", email)}
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /> */}
                        <InputComp type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail("hdsjdhk@tgfd.gfdg")} required={true} />
                        <InputComp type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required={true} />
                        <Button className="btn__primary--large" type="submit">Log in</Button>
                    </Form>
                    <div className="footer__content ">
                        <Link to="#">Forgot password?</Link>
                        <p>New to ImmoSnapp? <Link to="/signup">Join now</Link></p>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div >
    )
}
// }

const mapStateToProps = state => {
    return {
        signInResp: state.auth.signInUser
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        signInUser
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));