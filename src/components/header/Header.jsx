import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>
          Hello I'm 
        </h5>
        <h1>Abimbola Momoh</h1>
        <h5 className='text-light'> Accountant and a Business owner</h5>
         <CTA/>
         <HeaderSocial/>
          <div className='me'>
            <img src={ME} alt='me' />
          </div>
      </div>
      <a href='#contact' className='scroll__down'> Scroll Down</a>
    </header>
  )
}

export default header
