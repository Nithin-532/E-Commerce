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
      image: [
        "blob:https://web.whatsapp.com/53339ade-44e2-4a7c-b23a-1686cabbca31",
        "blob:https://web.whatsapp.com/95bad25e-ff54-4495-a567-b24777c07a60",
        "blob:https://web.whatsapp.com/9821f2d9-601e-4d2d-9008-967799da5f4e",
        "blob:https://web.whatsapp.com/7b8710e3-29de-410c-bd84-38a1bc8c3ae7",
        "blob:https://web.whatsapp.com/c8898622-e942-4ce4-9031-3aab10b64722",
        "blob:https://web.whatsapp.com/15ffd979-1dba-49e2-b8f6-44c3db0d93c6",
      ],
      name: "Lenovo T490 ThinkPad intel core i5 8th gen 8gb RAM 256gb SSD 14'' FHD",
      price: "₹26,500.00",
      link: "https://wa.me/p/24245919215054102/919742097199",
      about: "intel ® Core ™ i5-8265U Processor (6M Cache, up to 3.90 GHz), 16 GB DDR4, 512 GB M.2 NVMe, 14'' IPS LED with 1920x1080px resolution (Full-HD), Intel ® HD Graphics 620, Wifi, Bluetooth ®, FingerPrint sensor, Webcam, WWAN, backlit keyboard, without mechanics, Windows 11",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "LENOVO T480 CORE i5 8TH GEN 8GB RAM - 256GB SSD 14'' FHD DISPLAY WITH WARRANTY",
      price: "₹25,500.00",
      link: "https://wa.me/p/24737144972539576/919742097199",
      about: "Intel Core i5-8th gen, Intel HD Graphics, 8gb DDR4 RAM, 256 NVMe PCIe M.2 SSD 14'' Full HD anti-glare screen HD Webcam, 3 hrs + Battery life, HDMI",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL LATITUDE 5400 CORE i5 8TH GEN 8GB RAM & 256GB SSD 14'' DISPLAY",
      price: "₹25,500.00",
      link: "https://wa.me/p/5600258900099062/919742097199",
      about: "Dell Latitude 5400 14'' Laptop, i5-8265u quad core processor ,6MB cache ,8GB RAM 256GB SSD NVME ,Webcam Wi-Fi BLUETOOTH🛜🌐🎦🆗 ,1 YEAR WARRANTY",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL OPTIPLEX DESKTOP i5 6TH GEN 8GB RAM 256GB SSD 19'' MONITOR WITH KEYBOARD & MOUSE",
      price: "₹17,500.00",
      link: "https://wa.me/p/7978185318862483/919742097199",
      about: "Dell OptiPlex 3040,7040,5050 & 7050, Core i5 6th gen 3.2GHZ  processor, 8gb Ram ddr4, 256 GB SSD , Keyboard & Mouse , 19'' wide Monitor",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "HP ELITEBOOK 840 G5-G6 CORE i5 8TH GEN 8GB RAM - 256GB SSD 14'' FHD SCREEN WITH WARRANTY",
      price: "₹26,500.00",
      link: "https://wa.me/p/6719679248088023/919742097199",
      about: "CPU: intel Core i5 8th Gen processor, 8GB RAM DDR, 256GB SSD M., 14” Display FH, 3-4 hrs. battery backu, Webca, Wi-F, HDM, BLUETHOOTH, Note: Like New – Minimal Use – with Win 1, FREE DOOR DELIVERY ( Bangalore ), 6-12 MONTHS WARRANTY",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL 8TH GEN CORE i7 8GB RAM & 256GB SSD 14'' FHD SCREEN WITH WARRANTY",
      price: "₹27,500.00",
      link: "https://wa.me/p/24114788348169319/919742097199",
      about: "Manufacturer : Dell, Model : Latitude E7490, Processor : Intel Core i7 (QUAD CORE) CPU (UPTO 3.Ghz), Generation : 8th, RAM : 8 GB RAM DDR4 - UPTO 64GB, Hard Disk :256 GB SSD - UPTO 1TB, Display : 14 1 Inches FHD, Connectivity : LAN / Wireless LAN and Bluetooth, Graphics Card : Intel HD Graphics 8GB, Adapter : DELL Original 90 watt",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "SLIM DELL LATITUDE LAPTOP CORE i5 8GB RAM 256GB SSD",
      price: "₹22,000.00",
      link: "https://wa.me/p/6743869739006879/919742097199",
      about: "CPU: Core i5 6th Gen, 8GB RAM DDR4, 256GB SSD M.2, 14” Display HD, 3-4 hrs. battery backup, Webcam, Wi-Fi, BLUETHOOTH, Note: Like New – Minimal Use – with Win 11, FREE DOOR DELIVERY, FREE ANTIVIRUS, FREE BAGPACK, FREE MOUSE, 6 MONTHS WARRANTY",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL LATITUDE LAPTOP CORE i5 DDR4 8GB RAM 256GB M.2 14 screen",
      price: "₹19,999.00",
      link: "https://wa.me/p/6526729850696447/919742097199",
      about: "CPU: Core i5 6th Gen, 8GB RAM DDR4, 256GB SSD M.2, 14” Display HD, 3-4 hrs. battery backup, Webcam, Wi-Fi, BLUETHOOTH, Note: Like New – Minimal Use – with Win 11, FREE DOOR DELIVERY, FREE ANTIVIRUS, FREE BAGPACK, FREE MOUSE, 6 MONTHS WARRANTY, ",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "SLIM LENOVO LAPTOP CORE i5 8GB RAM 512GB SSD 14'' TOUCHSCREEN WITH EWARRANTY",
      price: "₹22,500.00",
      link: "https://wa.me/p/6794549070588999/919742097199",
      about: "LENOVO THINKPAD T470s LAPTOP , Core i5 6TH GEN , 12GB RAM DDR4, 512GB nvme SSD, BUILT IN CAMERA, 14'' SCREEN FHD DISPLAY, 3 hrs + battery backup, HDMI, TYPE C",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL OPTIPLEX DESKTOP i5 6TH GEN 8GB RAM 256GB SSD 19'' MONITOR WITH KEYBOARD & MOUSE",
      price: "₹17,500.00",
      link: "https://wa.me/p/7978185318862483/919742097199",
      about: "Dell OptiPlex 3040,7040,5050 & 7050, Core i5 6th gen 3.2GHZ  processor, 8gb Ram ddr4, 256 GB SSD , Keyboard & Mouse , 19'' wide Monitor",
      color: 'orange',
    },
    {
      image: [
        "blob:https://web.whatsapp.com/6ed79f91-3555-4294-bc6f-6c39480e4c6a",
        "blob:https://web.whatsapp.com/df1a29da-5e4e-4982-98d8-335d1ca94c33",
        "blob:https://web.whatsapp.com/880a5c09-18ca-4816-8eac-d02ad60c8386",
      ],
      name: "DELL 8TH GEN CORE i7 8GB RAM & 256GB SSD 14'' FHD SCREEN WITH WARRANTY",
      price: "₹27,500.00",
      link: "https://wa.me/p/24114788348169319/919742097199",
      about: "Manufacturer : Dell, Model : Latitude E7490, Processor : Intel Core i7 (QUAD CORE) CPU (UPTO 3.Ghz), Generation : 8th, RAM : 8 GB RAM DDR4 - UPTO 64GB, Hard Disk :256 GB SSD - UPTO 1TB, Display : 14 1 Inches FHD, Connectivity : LAN / Wireless LAN and Bluetooth, Graphics Card : Intel HD Graphics 8GB, Adapter : DELL Original 90 watt",
      color: 'orange',
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
    <div className="container mb-5 mb-lg-0">
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