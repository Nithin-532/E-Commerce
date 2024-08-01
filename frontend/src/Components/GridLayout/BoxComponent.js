// FloatingBox.js
import React from 'react';
import './FloatingBox.css';

const BoxComponent = ({ imageSrc, onClick }) => {
    return (
        <div className="floating-box" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={imageSrc} style={{ maxWidth: '100%' }}/>
        </div>
    );
};

export default BoxComponent;
