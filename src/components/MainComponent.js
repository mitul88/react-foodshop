import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import "./MainComponent.css";


const MainComponent = () => {
    return (
        <div className="view-area">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default MainComponent;