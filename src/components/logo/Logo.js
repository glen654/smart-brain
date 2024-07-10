import React from "react";
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{width: '150px', height: '150px'}}>
            <Tilt>
             <div className="shadow-1" style={{ width: '150px', height: '150px', backgroundColor: 'transparent' }}>
                <h1>React Parallax Tilt 👀</h1>
            </div>
            </Tilt>
        </div>
            
    );
}

export default Logo;