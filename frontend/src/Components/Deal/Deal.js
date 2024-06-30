import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DealCard from './DealCard';

function Deal() {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to previous slide
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to next slide
    }
  };

  const items = [
    {
      image: "/assets/images/products/product_1.png",
      name: "Apple iPhone",
      price: "83.74",
      sold: "497",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_2.png",
      name: "Samsung Galaxy",
      price: "97.14",
      sold: "763",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_3.png",
      name: "Nike Air Max",
      price: "68.71",
      sold: "684",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_4.png",
      name: "Adidas Ultraboost",
      price: "85.21",
      sold: "451",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_5.png",
      name: "Sony PlayStation",
      price: "52.17",
      sold: "433",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_6.png",
      name: "Microsoft Surface",
      price: "25.18",
      sold: "463",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_7.png",
      name: "Tesla Model S",
      price: "43.84",
      sold: "951",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_8.png",
      name: "Amazon Echo",
      price: "60.98",
      sold: "194",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_9.png",
      name: "Google Pixel",
      price: "98.42",
      sold: "425",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_10.png",
      name: "Bose QuietComfort",
      price: "53.37",
      sold: "435",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_11.png",
      name: "Canon EOS",
      price: "72.75",
      sold: "807",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_12.png",
      name: "HP Spectre",
      price: "56.61",
      sold: "521",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_13.png",
      name: "LG OLED",
      price: "64.55",
      sold: "538",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_14.png",
      name: "Rolex Submariner",
      price: "77.32",
      sold: "839",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_15.png",
      name: "Chanel No.5",
      price: "60.62",
      sold: "394",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_16.png",
      name: "Louis Vuitton Speedy",
      price: "79.81",
      sold: "269",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_17.png",
      name: "Gucci Ace",
      price: "93.68",
      sold: "453",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_18.png",
      name: "Ray-Ban Aviator",
      price: "47.44",
      sold: "821",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_19.png",
      name: "Herschel Little America",
      price: "76.24",
      sold: "364",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_20.png",
      name: "Le Creuset Dutch Oven",
      price: "92.87",
      sold: "849",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_21.png",
      name: "Yeti Tumbler",
      price: "72.91",
      sold: "804",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_22.png",
      name: "Patagonia Nano Puff",
      price: "20.54",
      sold: "776",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_23.png",
      name: "Lululemon Align Leggings",
      price: "94.25",
      sold: "263",
      color: "orange",
    },
    {
      image: "/assets/images/products/product_24.png",
      name: "Allbirds Wool Runners",
      price: "37.51",
      sold: "239",
      color: "orange",
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (  
    <div className="container">
      <div className='deal-header-container'>
        <div className="deal-heading">
          <div className="font-wt-7 font-size-xl">
            🔥 Hot Deal Today
          </div>
        </div>
        <div className='arrow-buttons'>
          <button onClick={handlePrevClick}>{'<'}</button>
          <button onClick={handleNextClick}>{'>'}</button>
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings} ref={sliderRef}>
          {items.map((item, i) => <DealCard key = {i} item = {item} />)}
        </Slider>
      </div>
    </div>
  );
}

export default Deal;