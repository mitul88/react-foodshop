import React, { Component } from "react";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


class Menu extends Component {
    state = {
        dishes : DISHES,
        comments: COMMENTS,
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
        const menu = this.state.dishes.map(item=> {
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
            const comments = this.state.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id
            })
            dishDetail= <DishDetail dish={this.state.selectedDish} comments={comments} />
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

export default Menu;