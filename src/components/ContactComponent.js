import React, { Component } from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Form,FormGroup, Col,Label,Input
    ,Button,FormFeedback } from "reactstrap";
import { json, Link } from 'react-router-dom';


class Contact extends Component {
    constructor (props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
            agree : '',
            contactType : 'Tel.',
            message : '',
            touched : {
                firstname: false,
                lastname : false,
                telnum : false,
                email : false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputchange = this.handleInputchange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);


    }

    handleInputchange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        console.log('Current State: '+JSON.stringify(this.state));
        alert('Current State: '+JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : { ...this.state.touched, [field] : true}
        })
    }

    validate(firstname, lastname, email, telnum) {
        const errors = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
        }

        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First name shoud be greater than 3 char';
        else if(this.state.touched.firstname && firstname.length > 7)
            errors.firstname = 'First name shoud be greater than 7 char';

        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last name shoud be greater than 3 char';
        else if(this.state.touched.lastname && lastname.length > 7)
            errors.lastname = 'Last name shoud be greater than 7 char';
        const reg = /^\d+$/; 
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        return errors;

    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" 
                                    placeholder="Firstname"
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputchange} 
                                    value={this.state.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}

                                    ></Input>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" 
                                    placeholder="lastname"
                                        value={this.state.lastname} 
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputchange}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}></Input>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telnum" md={2}>telnum</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" 
                                        placeholder="telnum"
                                        onBlur={this.handleBlur('telnum')}
                                        value={this.state.telnum} 
                                        onChange={this.handleInputchange}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        ></Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" 
                                        placeholder="email"
                                        onBlur={this.handleBlur('email')}
                                        value={this.state.email} 
                                        onChange={this.handleInputchange}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}></Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree} onChange={this.handleInputchange}
                                                /> 
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType} onChange={this.handleInputchange}
                                            >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message} onChange={this.handleInputchange}
                                        ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;