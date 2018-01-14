import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './picturePawfect.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 center" options={{ max: 55 }} style={{ height: 70, width: 70 }} >
                {/* eslint-disable-next-line */}
                <div className="Tilt-inner pa3"><img alt='logo' src={ logo }/></div>
            </Tilt>
        </div>
    );
};

export default Logo;
