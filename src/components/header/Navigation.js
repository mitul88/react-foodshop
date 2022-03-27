import React, {Component} from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';
import { Link } from "react-router-dom";

class Navigation extends Component  {
    render() {
        return (
            <Navbar dark color="dark" expand="sm">
                {/* <div className="container"> */}
                    <NavbarBrand href="/">
                        Bohubrihi Restaurant
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link active">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </NavItem>
                    </Nav>
                {/* </div> */}
            </Navbar>
        )
    }
}

export default Navigation;