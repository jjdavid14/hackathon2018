import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './picturePawfect.png';

const Logo = () => {
    return (
        <div className='' id='logo-img'>
            <Tilt className="Tilt shadow-2" options={{ max: 55 }} style={{ height: 60, width: 60 }} >
                {/* eslint-disable-next-line */}
                <div className="Tilt-inner pt2"><img alt='logo' src={ logo }/></div>
            </Tilt>
            <p className="f1 ma0 pa0" id='title'>Picture Pawfect</p>
        </div>
    );
};

export default Logo;
