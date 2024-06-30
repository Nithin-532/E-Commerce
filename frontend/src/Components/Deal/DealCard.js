function DealCard(props) {
  return (
    <div className='slick-card'>
      <div className='inner-card'>
        <div className="image-section">
          <img src={props.item.image} alt="product-img" />
        </div>
        <div className="title-price">
          <p className="deal-item font-wt-6">{props.item.name}</p>
          <p className={`${props.item?.color === 'orange' ? 'text-primary' : ''} font-wt-6`}>{`$ ${props.item.price}`}</p>
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