import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../MainContainer/User/User'
import WhatsAppButton from '../WhatsAppButton';

export default function Product() {
  const { selectedProduct } = useContext(UserContext);
  console.log(selectedProduct)

  return (
    <div style={{ padding: '60px 20px', width: '100%'}}>
      {selectedProduct ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', width: '100%'}}>
        <div>
          <img src={selectedProduct.image[0]} style={{ minWidth: '300px', maxWidth: '450px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div>
            <p style={{ textWrap: 'wrap', whiteSpace: 'pretty', textAlign: 'center', fontSize: '24px', fontWeight: '600', textTransform: 'capitalize'}}>{selectedProduct.name.toLowerCase()}</p>
          </div>
          <div style={{ alignSelf: 'flex-start', marginTop: '5px'}}>
            <p style={{ textAlign: 'start', margin: '0'}}>1k+ people bought this recently</p>
          </div>
          <div style={{ width: '100%', height: '2px', backgroundColor: 'black'}}>
          </div>
          <div style={{ alignSelf: 'flex-start', marginTop: '8px'}}>
            <p style={{ fontSize: '26px', fontWeight: '500'}}>{selectedProduct.price}</p>
          </div>
          <div style={{ alignSelf: 'flex-start'}}>
            <p style={{ fontWeight: '600', marginBottom: '4px' }}>About this item:</p>
            <p>{selectedProduct.about}</p>
          </div>
          <div>
            <WhatsAppButton link={selectedProduct.link} />
          </div>
        </div>
      </div>
      ) : (
        <div style={{ display: 'flex', textAlign: 'center', width: '100%'}}>
          <p style={{ textAlign: 'center'}}>Need to select a product</p>
        </div>
      )}
    </div>
  )
}
