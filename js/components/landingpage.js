import React from 'react';
import {Link} from 'react-router';

export default function LandingPage(){
    return(
        <div className="landingpage">
            <div className="welcome-msg">
                <h1>Github Card</h1>
                <p>Github Profile Viewer</p>
            </div>
            <div className="landingpage-img">
                <img src="./images/coding.gif" alt="coding gif" />
            </div>
            <div>
                <Link to='/app'><button className="submit">Start</button></Link>
            </div>
        </div>
    )
}