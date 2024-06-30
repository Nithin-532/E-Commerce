import * as React from 'react';
import { useState } from 'react';

function SpecialOffer() {
  const [selectedColorDiv, setSelectedColorDiv] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleColorDivClick = (index) => {
    setSelectedColorDiv(index === selectedColorDiv ? null : index);
  };

  const handleDivClick = (index) => {
    setSelectedDiv(index === selectedDiv ? null : index);
  };

  const borderDivs = ['128GB', '256GB', '512GB', '1TB'];

  const coloredDivs = ['primary', 'blue-light-3', 'blue-light-5', 'green-dark-2'];


  return (  
    <div className="container">
      <div className="featured-header font-wt-7 font-size-lg mb-4">
        <h2>Special Offer</h2>
      </div>
      <div className="special-offer-container">
        <div className="special-offer-container-new">
          <span className="text-primary">New 2022</span>
          <h5>Apple iPhone 14</h5>
          <h6>From $999</h6>
          <hr></hr>
        </div>
        <div className="special-offer-container-image">
          <img src="/assets/images/products/product_5.png" alt="iphone-img" />
        </div>
        <div className="special-offer-container-content">
          <div className="content-display">
            <h4 className="font-wt-6">Apple iPhone 14</h4>
            <p className="font-wt-4">While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun.</p>
          </div>
          <div className="content-display-secondary">
            <h6 className="font-wt-6 font-size-md">Color</h6>
            <div className="content-display-secondary-colors">
              {coloredDivs.map((color, index) => (
                <div
                  key={index}
                  className={`colored-block bg-${color} ${selectedColorDiv === index ? 'selectedColor' : ''}`}
                  onClick={() => handleColorDivClick(index)}>
                      {selectedColorDiv === index && <span className="tick-mark">&#10003;</span>}
                </div>
              ))}
              {/* <div key={1} className={`colored-block bg-primary ${selectedDiv === 1 ? 'selectedColor' : ''}`} onClick={() => handleColorDivClick(1)}>
                {selectedDiv === 1 && <span className="tick-mark">&#10003;</span>}
              </div>
              <div key={2} className={`colored-block bg-blue-light-3 ${selectedDiv === 2 ? 'selectedColor' : ''}`} onClick={() => handleColorDivClick(2)}>
                {selectedDiv === 2 && <span className="tick-mark">&#10003;</span>}
              </div>
              <div key={3} className={`colored-block bg-blue-light-5 ${selectedDiv === 3 ? 'selectedColor' : ''}`} onClick={() => handleColorDivClick(3)}>
                {selectedDiv === 3 && <span className="tick-mark">&#10003;</span>}
              </div>
              <div key={4} className={`colored-block bg-green-dark-2 ${selectedDiv === 4 ? 'selectedColor' : ''}`} onClick={() => handleColorDivClick(4)}>
                {selectedDiv === 4 && <span className="tick-mark">&#10003;</span>}
              </div> */}
            </div>
          </div>
          <div className="content-display-secondary">
            <h6 className="font-wt-6 font-size-md">Memory</h6>
            <div className="memory-buttons">
                {borderDivs.map((text, index) => (
                  <div 
                    key={index}
                    className={`${selectedDiv === index ? 'selected' : ''} memory-buttons-size`}
                    onClick={() => handleDivClick(index)}>
                    {text}
                  </div>
                ))}
            </div>
          </div>
          <button className="btn-black text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;