import React, { Component } from "react";
import {Form, Button, Input} from "reactstrap";

import { connect } from "react-redux";


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:"",
            comment:"",
            rating: ''
        }

        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // console.log(this.state);
        this.props.dispatch({
            type: "ADD_COMMENT",
            payload: {
                dishId: this.props.dishId,
                author: this.state.author,
                comment: this.state.comment,
                rating: this.state.rating
            }
        })
        this.setState({
            author:"",
            comment:"",
            rating: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        defaultValue={this.state.author}
                        placeholder="Your Name"
                        required
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Input 
                        type="select"
                        name="rating"
                        defaultValue={this.state.rating}
                        onChange={this.handleInputChange}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input 
                        type="textarea"
                        name="comment"
                        defaultValue={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(CommentForm);