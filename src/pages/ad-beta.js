import React, { Component } from 'react';


import {
    Button, Form, FormGroup, Input, Label, Col
}
    from 'reactstrap';
// import { Link } from 'react-router-dom';
class Adbeta extends Component {
    state = {
        formOne: true,
        formTwo: false,
        formThree: false
    }
    componentDidMount() {

    }
    showStep1 = () => {


        this.setState({ formOne: true, formTwo: false, formThree: false })



    }
    showStep2 = () => {

        if (!this.validateForm(0)) {
            return false
        }
        else {
            this.setState({ formOne: false, formTwo: true, formThree: false })

        }

    }
    showStep3 = () => {
        if (!this.validateForm(0)) {
            return false
        }
        else {
            this.setState({ formOne: false, formTwo: false, formThree: true })
        }
    }

    handleChange = (e) => {
        e.target.className = '';
    }
    validateForm = (currentTab) => {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // y = x[currentTab].getElementsByTagName("select");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value === "") {
                // add an "invalid" class to the field:
                y[i].className += " invalid";
                // and set the current valid status to false
                valid = false;
            }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
    }
    render() {
        return (
            <div>
                <div className="login-wrp ad-beta-wrp">
                    <div className="header__content ">
                        <img src={require("../assets/images/logo.png")} alt="logo" />
                        <p>Let’s start your profile, connect to people you know, and engage with them on topics you care about.</p>
                    </div>
                    <div className="form_wrp">
                        <Form id="regForm">
                            {/* <h1>Country:</h1> */}
                            {/* {this.state.formOne ?
                                <React.Fragment>
                                    <div className="tab">
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Country/Region</Label>
                                                     <div className="select-main">
                                                        <svg version="1.1"x="0px" y="0px" width="10px" viewBox="0 0 451.847 451.847">
                                                            <g>
                                                                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                                                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                                                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                                            </g>
                                                        </svg>
                                                    <Input onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                                        <option value="in">India</option>
                                                        <option value="af">Afghanistan</option>
                                                        <option value="ax">Aland Islands</option>

                                                    </Input>
                                                    </div>

                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Province</Label>
                                                     <div className="select-main">
                                                        <svg version="1.1"x="0px" y="0px" width="10px" viewBox="0 0 451.847 451.847">
                                                            <g>
                                                                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                                                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                                                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                                            </g>
                                                        </svg>
                                                    <Input onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                                        <option value="">Select Province</option>
                                                        <option value="0">Andaman &amp; Nicobar Islands</option>
                                                        <option value="1">Andhra Pradesh</option>
                                                        <option value="2">Arunachal Pradesh</option>
                                                        <option value="3">Assam</option>
                                                    </Input>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>City/District</Label>
                                                     <div className="select-main">
                                                        <svg version="1.1"x="0px" y="0px" width="10px" viewBox="0 0 451.847 451.847">
                                                            <g>
                                                                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                                                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                                                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                                            </g>
                                                        </svg>
                                                    <Input onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                                        <option value="">Select City/District</option>
                                                        <option value="urn:li:fs_city:(in,2-0)">Changlang</option>
                                                        <option value="urn:li:fs_city:(in,2-1)">Dibang Valley</option>
                                                        <option value="urn:li:fs_city:(in,2-2)">East Kameng</option>
                                                        <option value="urn:li:fs_city:(in,2-3)">East Siang</option>
                                                    </Input>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h3>Your profile helps you discover the right people and opportunities</h3>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Most recent job title </Label>
                                                    <Input onChange={this.handleChange} type="text" name="job title" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Most recent company</Label>
                                                    <Input type="text" onChange={this.handleChange} name="company" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Button className="form-control" color="student">I’m a student</Button>{' '}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>

                                        </Row>
                                        <Row className="student-form">
                                            <h3>Your Profile helps you discover the right people and opportunities</h3>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>School or College/University<span>*</span></Label>
                                                    <Input type="text" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Degree<span>*</span></Label>
                                                    <Input type="text" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Specialization<span>*</span></Label>
                                                    <Input type="text" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Start year<span>*</span></Label>
                                                    <Input type="text" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>End year(or expected)<span>*</span></Label>
                                                    <Input type="text" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Button className="form-control" color="student">I’m not a student</Button>{' '}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <button type="button" id="nextBtn" onClick={this.showStep2} > Next</button>
                                    </div>
                                </React.Fragment>
                                : null} */}
                            {/* {this.state.formTwo ? */}
                            {/* {this.state.formOne ?
                                <React.Fragment>
                                    <h3>Add your email contacts to see who you already know on ImmoSnapp</h3>
                                    <div className="tab">
                                        <FormGroup>
                                            <p className="form-control email-edit">Gurmeet@spineor.com
                                                <span class="pencil-btn">
                                                    <svg  x="0px" y="0px" width="15px" height="15px" viewBox="0 0 528.899 528.899" >
                                                        <g>
                                                            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                                                                c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                                                                C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                                                                L27.473,390.597L0.3,512.69z"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </p>
                                        </FormGroup>
                                        <p>We'll periodically import and store your contacts to suggest connections and show you relevant updates.
                                            You control who you connect to,and you can manage your contacts anytime</p>
                                        <div className="foem-btn-row">
                                            <Button color="continue">Continue</Button>{' '}
                                            <Button color="skip">Skip</Button>{' '}
                                        </div>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <button type="button" id="nextBtn" onClick={this.showStep3}>Next</button>
                                    </div>
                                </React.Fragment>
                                : null} */}
                            {/* {this.state.formOne ?
                            <React.Fragment>
                                    <h3>Connecting with people lets you see updates and keep in touch</h3>
                                    <div className="tab">
                                        <FormGroup className="search-gp">
                                            <Input type="text" placeholder="Search for someone specific to connect with..."  name="search" className="form-control email-edit" autoComplete="on" >
                                            </Input>
                                            <span class="pencil-btn">
                                                <svg width="15px" height="15px" version="1.1" id="Capa_1"  x="0px" y="0px"
                                                    viewBox="0 0 56.966 56.966">
                                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                                                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                                                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                                                    s-17-7.626-17-17S14.61,6,23.984,6z"/>
                                                </svg>
                                            </span>
                                        </FormGroup>
                                        <div className="specific-list">
                                            <Card>
                                                <div className="caed-wrp">
                                                    <div className="img-section">
                                                    </div>
                                                    <CardBody>
                                                        <CardTitle>Card title</CardTitle>
                                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                                    </CardBody>
                                                    <CardLink href="#">+</CardLink>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="foem-btn-row">
                                            <Button color="continue">Continue</Button>{' '}
                                            <Button color="skip">Skip</Button>{' '}
                                            <Button color="skip add-connections">Add 1 connections </Button>{' '}
                                        </div>
                                    </div>
                                </React.Fragment> : null} */}
                            {/* {this.state.formOne ?
                                <React.Fragment>
                                    <h3>Adding a photo Help people recognize you</h3>
                                    <div className="tab">
                                        <div className="user-img-step">
                                            <div class="image-upload-wrap">
                                                <input class="file-upload-input" type="file" onchange="readURL(this);" accept="image/*" />
                                                <div class="file-upload-content">
                                                    <img class="file-upload-image" src="#" alt="your image" />
                                                </div>
                                            </div>
                                            <div className="user-contact">
                                                <h3>Gurneet singh</h3>
                                                <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <div className="button-row">
                                                    <Button color="skip add-pic">Add Photo</Button>{' '}
                                                    <Button color="skip use-pic">Use my Google photo</Button>{' '}
                                                    <Button color="skip use-pic">Use my Facebook photo</Button>{' '}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="foem-btn-row justify-content-center mt30">
                                            <Button color="skip">Skip</Button>{' '}
                                        </div>
                                    </div>
                                </React.Fragment> : null} */}
                            {this.state.formOne ?
                                <React.Fragment>
                                    <h3>Get the linked App</h3>
                                    <div className="tab">
                                        <div className="user-img-step">
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label>Province</Label>
                                                    <div className="select-main">
                                                        <svg version="1.1"x="0px" y="0px" width="10px" viewBox="0 0 451.847 451.847">
                                                            <g>
                                                                <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                                                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                                                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                                            </g>
                                                        </svg>
                                                        <Input onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                                            <option value="">Select Province</option>
                                                            <option value="0">Andaman &amp; Nicobar Islands</option>
                                                            <option value="1">Andhra Pradesh</option>
                                                            <option value="2">Arunachal Pradesh</option>
                                                            <option value="3">Assam</option>
                                                        </Input>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label>Number</Label>
                                                    <Input type="number" onChange={this.handleChange} name="phone" autoComplete="on" />
                                                </FormGroup>
                                            </Col>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <div className="foem-btn-row justify-content-center mt30 justify-content-between">
                                            <Button color="continue">Text me the link</Button>{' '}
                                            <Button color="skip">Skip</Button>{' '}
                                        </div>
                                    </div>
                                </React.Fragment> : null}
                            {this.state.formThree ?
                                <React.Fragment>
                                    <div className="tab">Birthday:
    <p><input placeholder="dd" onChange={this.handleChange} name="dd" /></p>
                                        <p><input placeholder="mm" onChange={this.handleChange} name="nn" /></p>
                                        <p><input placeholder="yyyy" onChange={this.handleChange} name="yyyy" /></p>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        {/* <button type="button" id="prevBtn" onClick={
                                            this.showStep2
                                        }>Previous</button> */}
                                        <button type="button" id="nextBtn" onClick={this.showStep3}>Next</button>
                                    </div></React.Fragment>
                                : null}

                            {/* <div style={{ overflow: ' auto' }}>
                                <div style={{ float: 'right' }}>
                                    <button type="button" id="prevBtn" onClick={(event) => {
                                        this.nextPrev(-1)
                                    }}>Previous</button>
                                    <button type="button" id="nextBtn" onClick={(event) => { this.nextPrev(1) }}>Next</button>
                                </div>
                            </div> */}
                            {/* 
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <span className={this.state.formOne ? "step active" : "step"}></span>
                                <span className={this.state.formTwo ? "step active" : "step"}></span>
                                <span className={this.state.formThree ? "step active" : "step"}></span>

                            </div> */}
                        </Form>

                    </div>
                </div>
            </div >
        );
    }
}

export default Adbeta;