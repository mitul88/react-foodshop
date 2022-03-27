import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';

class Navigation extends Component  {
    render() {
        return (
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">
                        Bohubrihi Restaurant
                    </NavbarBrand>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;