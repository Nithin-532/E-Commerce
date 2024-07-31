import React from 'react'
import WhatsAppButton from '../WhatsAppButton'

export default function Card(props) {
  return (
    <div>
      <div>
        <div>
          <img src={props.item.image[0]} alt="product-img" style={{ width: '100%', aspectRatio: "1/1", objectFit: 'contain', borderRadius: '16px'}}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px'}}>
          <p style={{ textDecoration: 'none', color: 'black', margin: '0'}}>{props.item.name}</p>
          <p style={{ margin: '0'}}>{`${props.item.price}`}</p>
          <WhatsAppButton link={props.item.link} />
        </div>
        {props.item.sold ? 
          <div>
            <div></div>
            <div>{`🔥${props.item.sold} sold`}</div>
          </div>
          : <div></div>
        }
      </div>
    </div>
  )
}
