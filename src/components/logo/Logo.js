import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{width: '150px', height: '150px'}}>
            <Tilt>
             <div className="shadow-1" options={{max: 55}} style={{ width: '150px', height: '150px'}}>
                <h1>React Parallax Tilt 👀</h1>
            </div>
            </Tilt>
        </div>
            
    );
}

export default Logo;