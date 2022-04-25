import { Button } from 'bootstrap';
import React, {Component} from 'react';

import { Buttonm, Form, FormGroup, Label, Input, Col, Spinner } from 'reactstrap';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            agree: false,
            contactType: "phone",
            message: ""
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-12 text-center'>
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className='col-12'>
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type='text' 
                                        name="firstname" 
                                        placeholder='First Name' 
                                        value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type='text' 
                                        name="lastname" 
                                        placeholder='Your Last Name' 
                                        value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input 
                                        type='text' 
                                        name="phone" 
                                        placeholder='Your Phone Number' 
                                        value={this.state.phone} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input 
                                        type='email' 
                                        name="email" 
                                        placeholder='Your Email Address' 
                                        value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size: 6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                                type='checkbox' 
                                                name="agree" 
                                                checked={this.state.agree} />
                                        <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="12">

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;