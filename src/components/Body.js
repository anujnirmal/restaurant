import React from "react";
import image from "../assets/image.jpg";
import delivery from "../assets/delivery-man.png";
import dineIn from "../assets/dining-table.png";
import takeAway from "../assets/take-away.png";

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
                <h4>Our Services</h4>
                <div className="rel">
                    <div className="features">
                        <div class="one">
                            <img className="our-pick" src={dineIn} alt="delivery man" />
                            <h5 className="sub-text first">Dine In</h5>
                        </div>
                        <div class="two">
                            <img className="our-pick" src={delivery} alt="delivery man" />
                            <h5 className="sub-text second">Home Delivery</h5>
                        </div>
                        <div class="three">
                            <img className="our-pick" src={takeAway} alt="delivery man" />
                            <h5 className="sub-text third">Take Away</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-back">
               
            </div>
        </div>
    );
}

export default Body;