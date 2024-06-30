// BrandSection.js
import React from 'react';
import './styles.css';
import acer from '../../assets/brands/acer.png';
import apple from '../../assets/brands/apple.png';
import asus from '../../assets/brands/asus.png';
import dell from '../../assets/brands/dell.png';
import hp from '../../assets/brands/hp.png';
import lenovo from '../../assets/brands/lenovo.png';
import microsoft from '../../assets/brands/microsoft.png';

const BrandSection = () => {
    return (
        <div className="brand-container">
            <h2 className="brand-title">SHOP BY BRAND</h2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <hr style={{ width: '150px', border: '2px solid darkblue', margin: '0'}}/>
            </div>
            <div className="brand-logos">
                <div className="brand-logo"><img src={lenovo} alt="Lenovo" /></div>
                <div className="brand-logo"><img src={dell} alt="Dell" /></div>
                <div className="brand-logo"><img src={hp} alt="HP" /></div>
                <div className="brand-logo"><img src={asus} alt="ASUS" /></div>
                <div className="brand-logo"><img src={apple} alt="Apple" /></div>
                <div className="brand-logo"><img src={acer} alt="Acer" /></div>
                <div className="brand-logo"><img src={microsoft} alt="Microsoft" /></div>
            </div>
        </div>
    );
};

export default BrandSection;
