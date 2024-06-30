// FloatingBox.js
import React from 'react';
import './FloatingBox.css';

const BoxComponent = ({ imageSrc }) => {
    return (
        <div className="floating-box">
            <img src={imageSrc} style={{ maxWidth: '100%' }}/>
        </div>
    );
};

export default BoxComponent;
