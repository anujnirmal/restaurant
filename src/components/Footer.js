import React from "react";

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    console.log(year);
    return (
            <footer>
                <div>&copy; {year}</div>
            </footer>
    );
}

export default Footer;