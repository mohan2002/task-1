import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import logo from '../download.png'

function MainNavigation() {
    return (
        <header className={classes.header}>
        <img src={logo} className={classes.logo}/>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Help'>How we help</Link>
                    </li>
                    <li>
                        <Link to='/Program'>Programs</Link>
                    </li>
                    <li>
                        <Link to='/FAQS'>FAQS</Link>
                    </li>
                    <li>
                        <button Style="background-color:rgb(47, 55, 120); color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px; border-radius: 1000px; width: 220px; height: 50px; text-align: center; margin: 5px; overflow: hidden; padding:10px;">Get in touch</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
