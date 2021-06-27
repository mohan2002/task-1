/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './card.css'
import tick from '../Components/tick.png'
function Card(props) {
    return (
        <div className="wrapper">
        <div className="card">
            <div className="card_body">
                <h1 className="card_title">Free</h1>
                <p className="title">Core Features</p>
                <div className="card-des">
                    <div className="temp"><li>E tasks</li><img src={tick} className="tick"></img></div>
                    <div className="temp"><li>Aptitudes</li><img src={tick} className="tick"></img></div>
                    <li>Daily Challenges</li>
                    <li>Interactive sessions</li>
                    <li>Group discussions</li>
                    <li>Career counselling</li>
                
                <p className="title">Addtional Features</p>
                <div>
                    <li>E library Books</li>
                    <li>Internet Connectivity</li>
                    <li>Flexible hours</li>
                    <li>HD videos</li>
                </div>
                </div>
            </div>
            <button className="btn">Take the package</button>
        </div>    
        
        </div>
        
        )


}

export default Card
