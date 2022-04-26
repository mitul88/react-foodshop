import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment:(dishId, author, comment, rating) => dispatch({
            type: "ADD_COMMENT",
            payload: {
                dishId: dishId,
                author: author,
                comment: comment,
                rating: rating
            }
        })
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }

    toogleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render = () => {
        document.title="Menu";
        const menu = this.props.dishes.map(item=> {
            return (
                <div key={item.id} className="col-sm-12 col-md-4 col-lg-3">
                    <MenuItem 
                        dish={item} 
                        onDishSelect={()=>this.onDishSelect(item)} 
                    />
                </div>

            )
        })
        let dishDetail = null;
        if(this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            dishDetail= <DishDetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} />
        }
        return (
            <div className="container">
                <div className="row">
                    {menu}
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toogleModal} color="secondary">
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);