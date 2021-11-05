import React from "react";
import image from "../assets/image.jpg";

function Body() {
    return (
        <div className="body-container">
            <img className="backdrop" src={image} alt="back-image" />
            <div className="container body-main">
                <h1 className="title-body">Welcome to <br /><span className="body-text">Cafe Restaurant</span></h1>
                <p className="para-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt erat <br />pretium bibendum dictum. In sapien nulla, tempor ut dapibus aliquam, sodales<br /> sit amet nisi. Mauris massa felis,</p>
                <button className="button-body">See Menu</button>
            </div>
            <div className="card">
                <h4>Our Top Picks</h4>
            </div>
            <div className="card-back">

            </div>
        </div>
    );
}

export default Body;