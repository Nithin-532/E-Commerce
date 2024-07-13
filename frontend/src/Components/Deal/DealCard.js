import WhatsAppButton from "../WhatsAppButton";

function DealCard(props) {
  return (
    <div className='slick-card'>
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