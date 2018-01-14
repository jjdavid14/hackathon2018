import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')} className='f4 link dim black pointer' class="nav-button">Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim black pointer' class="nav-button">Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f4 link dim black pointer' class="nav-button">Register</p>
            </nav>
        );
    }
}

export default Navigation;
