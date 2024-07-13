import React from 'react'
import { whatsapp_icon } from '../assets'

export default function WhatsAppButton({ link }) {
  return (
    <button style={{ display: 'flex', border: "2px solid white", alignItems: 'center', backgroundColor: '#25D366', borderRadius: '10px', justifyContent: 'center', padding: '10px 8px' }}>
      <a href={link} target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
        <p style={{ margin: '0' }}>{whatsapp_icon}</p>
        <p style={{ color: 'white', paddingLeft: '6px', margin: '0', }}>Buy on WhatsApp</p>
      </a>
    </button>
  )
}
