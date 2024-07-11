import DealCard from "../Deal/DealCard";

function FeaturedProducts() {
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
              <img src="/assets/images/products/product_2.png" />
            </div>
            <div className="featured-card-details">
              <a className="featured-card-details-name" href="https://wa.me/p/6719679248088023/919742097199" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>HP ELITEBOOK 840 G5-G6 CORE i5 8TH GEN 8GB RAM - 256GB SSD 14" FHD SCREEN</a>
              <p className="font-wt-6">₹26,500.00</p>
            </div>
          </div>
          <div className="violet featured-card">
            <div className="featured-card-image">
              <img src="/assets/images/products/product_3.png" />
            </div>
            <div className="featured-card-details">
              <a className="featured-card-details-name" href="https://wa.me/p/24114788348169319/919742097199" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>DELL 8TH GEN CORE i7 8GB RAM & 256GB SSD 14" FHD SCREEN WITH WARRANTY</a>
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