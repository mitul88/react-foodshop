import React from "react";
import {Form, Button, Input} from "reactstrap";


class CommentForm extends Componenet {
    constructor(props) {
        super(props);
        this.state = {
            author:"",
            comment:"",
            rating: ''
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Input
                        type="text"
                        name="author"
                        defaultValue={this.state.author}
                        placeholder="Your Name"
                        required
                    />
                    <br />
                    <Input 
                        type="select"
                        name="rating"
                        value={this.state.rating}
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
                    />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}
