import React from 'react'
import './page-styles/Helppage.css'
import img from './img4.svg'
function Help() {
    return (
        <div className="container">
            <div className="content">
            <h1>How we can Help</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
             elit. Nulla gravida nisl vitae dignissim dui, 
             elit, laoreet sit ultrices. 
             Montes, est nisl, fermentum sodales nunc viverra. 
             Imperdiet non non urna tellus a scelerisque ut nibh.</p>
            
            <h2 className="h2"><span className="sp">STEP 1</span>SELF ANALYSIS</h2>
            <h2 className="h2"><span  className="sp">STEP 2</span>SELF ANALYSIS</h2>
            <h2 className="h2"><span  className="sp">STEP 3</span>SELF ANALYSIS</h2>
            <h2 className="h2"><span  className="sp">STEP 4</span>SELF ANALYSIS</h2>
            </div>
            <img src={img} className="img"></img>
        </div>
    )
}

export default Help
