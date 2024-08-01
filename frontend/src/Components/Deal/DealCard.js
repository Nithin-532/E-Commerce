import { useContext } from "react";
import WhatsAppButton from "../WhatsAppButton";
import { UserContext } from "../../MainContainer/User/User";
import { useNavigate } from "react-router-dom";

function DealCard(props) {
  const { setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className='slick-card' onClick={() => {
      console.log(props.item);
      setSelectedProduct(props.item);
      navigate("/product");
    }}>
      <div className='inner-card'>
        <div className="image-section">
          <img src={props.item.image[0]} alt="product-img" style={{ width: '100%', aspectRatio: "1/1", objectFit: 'contain', borderRadius: '16px'}}/>
        </div>
        <div className="title-price" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px'}}>
          <p className="deal-item font-wt-6" style={{ textDecoration: 'none', color: 'black', margin: '0'}}>{props.item.name}</p>
          <p style={{ margin: '0'}}>{`${props.item.price}`}</p>
          <WhatsAppButton link={props.item.link} />
        </div>
        {props.item.sold ? 
          <div className="sold-section">
            <div className="line"></div>
            <div className="sold font-wt-2 font-size-sm">{`🔥${props.item.sold} sold`}</div>
          </div>
          : <div></div>
        }
      </div>
    </div>
  );
}

export default DealCard;