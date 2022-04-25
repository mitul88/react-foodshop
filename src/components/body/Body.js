import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "react-router-dom";

import { Navigate } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact element={<About />} />
                <Route
                        path="*"
                        element={<Navigate to="/home" replace />}
                />
            </Routes>
        </div>
    )
}

export default Body;