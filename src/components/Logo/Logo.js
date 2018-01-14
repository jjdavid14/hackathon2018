import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './picturePawfect.png';

const Logo = () => {
    return (
        <div className='ma3 mt0'>
            <Tilt className="Tilt shadow-2" options={{ max: 55 }} style={{ height: 60, width: 60 }} >
                {/* eslint-disable-next-line */}
                <div className="Tilt-inner pt2"><img alt='logo' src={ logo }/></div>
            </Tilt>
        </div>
    );
};

export default Logo;
