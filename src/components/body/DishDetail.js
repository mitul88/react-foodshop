import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from "./CommentForm";

import LoadComments from "./LoadComments";


const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop: "10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <span>{props.dish.description}</span>
                    </CardText>
                    <CardText>
                        <span>{props.dish.price}/-</span>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;