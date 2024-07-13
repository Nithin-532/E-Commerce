import { IMAGES, whatsapp_icon } from "../../assets";
import DealCard from "../Deal/DealCard";
import WhatsAppButton from "../WhatsAppButton";

function FeaturedProducts() {
  const items = [
    {
      image: [
        IMAGES.lenovo.t490.image1,
        IMAGES.lenovo.t490.image2,
        IMAGES.lenovo.t490.image3,
        IMAGES.lenovo.t490.image4
      ],
      name: "Lenovo T490 ThinkPad intel core i5 8th gen 8gb RAM 256gb SSD 14'' FHD",
      price: "₹26,500.00",
      link: "https://wa.me/p/24245919215054102/919742097199",
      about: "intel ® Core ™ i5-8265U Processor (6M Cache, up to 3.90 GHz), 16 GB DDR4, 512 GB M.2 NVMe, 14'' IPS LED with 1920x1080px resolution (Full-HD), Intel ® HD Graphics 620, Wifi, Bluetooth ®, FingerPrint sensor, Webcam, WWAN, backlit keyboard, without mechanics, Windows 11",
    },
    {
      image: [
        IMAGES.lenovo.t480.image1,
        IMAGES.lenovo.t480.image2,
        IMAGES.lenovo.t480.image3,
        IMAGES.lenovo.t480.image4,
        IMAGES.lenovo.t480.image5,
      ],
      name: "LENOVO T480 CORE i5 8TH GEN 8GB RAM - 256GB SSD 14'' FHD DISPLAY WITH WARRANTY",
      price: "₹25,500.00",
      link: "https://wa.me/p/24737144972539576/919742097199",
      about: "Intel Core i5-8th gen, Intel HD Graphics, 8gb DDR4 RAM, 256 NVMe PCIe M.2 SSD 14'' Full HD anti-glare screen HD Webcam, 3 hrs + Battery life, HDMI",
    },
    {
      image: [
        IMAGES.dell[5400].image1,
        IMAGES.dell[5400].image2,
        IMAGES.dell[5400].image3,
        IMAGES.dell[5400].image4,
      ],
      name: "DELL LATITUDE 5400 CORE i5 8TH GEN 8GB RAM & 256GB SSD 14'' DISPLAY",
      price: "₹25,500.00",
      link: "https://wa.me/p/5600258900099062/919742097199",
      about: "Dell Latitude 5400 14'' Laptop, i5-8265u quad core processor ,6MB cache ,8GB RAM 256GB SSD NVME ,Webcam Wi-Fi BLUETOOTH🛜🌐🎦🆗 ,1 YEAR WARRANTY",
    },
    {
      image: [
        IMAGES.dell.optiplex.image1,
      ],
      name: "DELL OPTIPLEX DESKTOP i5 6TH GEN 8GB RAM 256GB SSD 19'' MONITOR WITH KEYBOARD & MOUSE",
      price: "₹17,500.00",
      link: "https://wa.me/p/7978185318862483/919742097199",
      about: "Dell OptiPlex 3040,7040,5050 & 7050, Core i5 6th gen 3.2GHZ  processor, 8gb Ram ddr4, 256 GB SSD , Keyboard & Mouse , 19'' wide Monitor",
    },
  ]

  return (  
    <div className="container">
      <div className="featured-header font-wt-7 font-size-lg mb-4">
        <h2>Featured Products</h2>
      </div>
      <div className="featured-products-container">
        <div className="featured-products-container-colored">
          <div className="orange featured-card">
            <div className="featured-card-image">
              <img src={IMAGES.hp["840_G5"].image5} style={{ width: '100%', aspectRatio: "1/1", objectFit: 'contain'}} />
            </div>
            <div className="featured-card-details">
              <p className="featured-card-details-name" style={{ textDecoration: 'none', color: 'black', overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": 2, "line-clamp": 2, "-webkit-box-orient": "vertical" }}>HP ELITEBOOK 840 G5-G6 CORE i5 8TH GEN 8GB RAM - 256GB SSD 14" FHD SCREEN</p>
              <button style={{ display: 'flex', border: "2px solid white", alignItems: 'center', backgroundColor: 'transparent', borderRadius: '10px', justifyContent: 'center', padding: '10px 8px'}}>
                <a href="https://wa.me/p/6719679248088023/919742097199" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
                  <p style={{ margin: '0'}}>{whatsapp_icon}</p> 
                  <p style={{ color: 'white',paddingLeft: '6px', margin: '0', fontWeight: 'bold' }}>Buy on WhatsApp</p>
                </a>
              </button>
              <p className="font-wt-6">₹26,500.00</p>
            </div>
          </div>
          <div className="violet featured-card">
            <div className="featured-card-image">
              <img src={IMAGES.dell.e7490.image6} style={{ width: '100%', aspectRatio: "1/1", objectFit: 'contain'}}/>
            </div>
            <div className="featured-card-details">
              <p className="featured-card-details-name" style={{ textDecoration: 'none', color: 'black', overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": 2, "line-clamp": 2, "-webkit-box-orient": "vertical" }}>DELL 8TH GEN CORE i7 8GB RAM & 256GB SSD 14" FHD SCREEN WITH WARRANTY</p>
              <button style={{ display: 'flex', border: "2px solid white", alignItems: 'center', backgroundColor: 'transparent', borderRadius: '10px', justifyContent: 'center', padding: '10px 8px'}}>
                <a href="https://wa.me/p/24114788348169319/919742097199" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
                  <p style={{ margin: '0'}}>{whatsapp_icon}</p> 
                  <p style={{ color: 'white',paddingLeft: '6px', margin: '0', fontWeight: 'bold' }}>Buy on WhatsApp</p>
                </a>
              </button>
              <p className="font-wt-6">₹27,500.00</p>
            </div>
          </div>
        </div>
        <div className="products-grid">
          {items.map((item, i) => <DealCard key = {i} item = {item}/>)}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;