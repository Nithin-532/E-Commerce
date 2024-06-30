import DealCard from "../Deal/DealCard";

function FeaturedProducts() {
  const items = [
    {
      image: "/assets/images/products/product_5.png",
      name: "Sony PlayStation",
      price: "52.17",
    },
    {
      image: "/assets/images/products/product_6.png",
      name: "Microsoft Surface",
      price: "25.18",
    },
    {
      image: "/assets/images/products/product_7.png",
      name: "Tesla Model S",
      price: "43.84",
    },
    {
      image: "/assets/images/products/product_8.png",
      name: "Amazon Echo",
      price: "60.98"
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
              <p className="featured-card-details-name">Samsung Galaxy</p>
              <p className="font-wt-6">From $97.14</p>
            </div>
          </div>
          <div className="violet featured-card">
            <div className="featured-card-image">
              <img src="/assets/images/products/product_3.png" />
            </div>
            <div className="featured-card-details">
              <p className="featured-card-details-name">Nike Air Max</p>
              <p className="font-wt-6">From $68.71</p>
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