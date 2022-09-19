import React from 'react';
import '../styles/main.css';
import '../styles/card.css';


export default function Home(){
    return(
        <div>
        <header className="masthead">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Image--> */}
                {/* <img className="masthead-avatar mb-5" src="./profile-pic.png" alt="profile picture"/> */}
                <h1 className="masthead-heading text-uppercase mb-0">Joel Prentiss</h1>
                <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Web Designer - Content Creator - Veteran</p>
            </div>
        </header>
        <card className='card'>
            <img src = './profile-pic.png' alt="profile of Joel Prentiss"/>
            <p className='body'>Joel Prentiss is a web developer specilizing in full stack development. An experienced entrepeneur and content creator. Joel is also a US Navy Veteran.</p>
        </card>
        </div>
    )
}