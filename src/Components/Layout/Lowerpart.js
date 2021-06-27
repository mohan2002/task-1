/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import'./Lowerpart.css'
function Lowerpart() {
    return (
        <div className="overall">
            <div className="row">
                <h1>Contact us</h1>
                <div className="con">
                    <li>Address: ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</li>
                    <li>Email : ipsumdolor@gmail.com</li>
                    <li>+91 87449 87449</li>
                    <li><img src="https://www.infigonfutures.com/static/media/contact_apple.ebf20aa4.svg"></img></li>
                    <li><img src="https://www.infigonfutures.com/static/media/contact_google.76d3ecc3.svg"></img></li>
                </div>
            </div>
            <div>
            <h1>Product</h1>
            <div className="product">
                <li>Employee database</li>
                <li>payroll</li>
                <li>Absences</li>
                <li>Time tracking</li>
            </div>
            </div>
            <div>
            <h1>Information</h1>
            <div className="information">
                <li>FAQ</li>
                <li>Blogs</li>
                <li>Support</li>
                <li>Company</li>
            </div>
            </div>
            <div className="sub">
                <h1>subscribe</h1>
                <input type="text"></input>
                <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            </div>
        </div>
    )
}

export default Lowerpart
