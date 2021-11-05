import React from "react";
import image from "../assets/image.jpg";

function Body() {
    return (
        <div>
            <img className="backdrop" src={image} alt="back-image" />
            <div>
                <h1 className="title-body">Welcome to Cafe Restaurant</h1>
            </div>
        </div>
    );
}

export default Body;