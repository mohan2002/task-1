import React from 'react'
import './page-styles/Programs.css'
import Card1 from '../UI/Card1'
import Card2 from '../UI/Card2'
import Card3 from '../UI/Card3'
function Programs() {
    return (
        <div>
        <h1 className="h1">Our Packages</h1>
        <div className="Container1">
            <Card1/>
            <Card2/>
            <Card3/>
            </div>
        </div>
    )
}

export default Programs
