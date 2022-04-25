import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

import { CardColumns, Modal, ModalBody, ModalFooter, Button, Card} from 'reactstrap';


class Menu extends Component {
    state = {
        dishes : DISHES,
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
        const menu = this.state.dishes.map(item=> {
            return (
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <MenuItem 
                        dish={item} 
                        key={item.id}
                        onDishSelect={()=>this.onDishSelect(item)} 
                    />
                </div>

            )
        })
        let dishDetail = null;
        if(this.state.selectedDish != null) {
            dishDetail= <DishDetail dish={this.state.selectedDish} />
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