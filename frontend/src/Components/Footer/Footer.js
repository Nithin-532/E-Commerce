import { IMAGES } from "../../assets"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="d-none d-lg-flex justify-content-between" style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '400' }}>
          <div>&#169;</div>
          <div>2024 BuyAndSellLaptops - All Rights Reserved</div>
        </div>
        <div>
          <img src={IMAGES.payment_icon} alt="payment-icon" />
        </div>
      </div>
      <div className="col-lg-4 text-start d-lg-none text-center p-4">
          <img src="path-to-your-logo.png" alt="Buy&SellLaptops" className="img-fluid mb-3" />
          <h2>BuyAndSellLaptops</h2>
          <p className="text-muted">BEGINNING OF NEW DIGITAL WORLD</p>
          <div>
            <h5>Got Questions? Call us 24/7</h5>
            <p>
              <i className="bi bi-telephone-fill"></i> +91 70307 03101 <br />
              <i className="bi bi-telephone-fill"></i> +91 96049 00311
            </p>
          </div>
        </div>
    </div>
  )
}