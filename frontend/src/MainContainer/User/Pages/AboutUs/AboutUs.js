import { IMAGES } from "../../../../assets";

const AboutUs = () => {
  return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>About Us</h1>
          <p>Panna Computer offers quality pre-owned devices that are best priced in the market. We source reliable brands such as Apple, Dell, Microsoft, HP and Lenovo, and offer 90 days replacement warranty – just for the peace of mind!</p>
        </div>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col">
          <img src={IMAGES.banner1} className="img-fluid" alt="Refurbished Laptops Banner" />
        </div>
      </div>
      {/* <div className="row my-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Offering Quality Used Refurbished Laptops</h5>
              <p className="card-text">Restored to Original Condition & Performance fully Tested & Repackaged high quality product with warranty at a Low Cost</p>
              <a href="#" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col">
          <h2>What We Exactly Do?</h2>
          <p>The objective is to maintain dominant position and further capture market share from the large unorganized refurbished segment of the IT Industry.</p>
        </div>
      </div>
      <div className="row text-center my-4 mb-5 mt-5">
        <div className="col-md-4">
          <h4>Recycle</h4>
          <p>Panna Computer provides clean, safe and secure removal of redundant IT assets. We help organizations reclaim the value, back from retired equipment and safely dispose of any regulated electronics waste.</p>
        </div>
        <div className="col-md-4">
          <h4>Refurbish</h4>
          <p>State-of-the-art manufacturing facilities, equipped to provide manufacturing of critical components, assembly, testing and refurbishing services.</p>
        </div>
        <div className="col-md-4">
          <h4>Reuse</h4>
          <p>Be the largest electronics player to drive the distribution of refurbished products.</p>
          <p> Aim to be the most trusted brand to provide the device buyback program.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;