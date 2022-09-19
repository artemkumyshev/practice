import React from 'react'

import './Footer.scss';

import logo from './logo.svg';
import phone from './phone.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import pin from './pin.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__column logo-copyright'>
        <div className='column__logo'>
          <img src={logo} className='column__logo-img'></img>
          Куда пицца
        </div>
        <p className='column__copyright'>© Copyright 2021 — Куда Пицца</p>  
      </div>
      <div className='footer__column'>
        <p className='footer__column-title'>Куда пицца</p>
        <a className='footer__column-link' href="#">О компании</a>
        <a className='footer__column-link' href="#">Пользовательское соглашение</a>
        <a className='footer__column-link' href="#">Условия гарантии</a>
      </div>
      <div className='footer__column'>
        <p className='footer__column-title'>Помощь</p>
        <a className='footer__column-link' href="#">Ресторан</a>
        <a className='footer__column-link' href="#">Контакты</a>
        <a className='footer__column-link' href="#">Поддержка</a>
        <a className='footer__column-link' href="#">Отследить заказ</a>
      </div>
      <div className='footer__column'>
        <p className='footer__column-title'>Контакты</p>
        <div className='footer__column-link '>
          <a href="#" className='link-connection'><img src={phone}></img>+7 (926) 223-10-11</a>
        </div>
        <div className='footer__column-link'>
          <a href="#" className='link-connection'><img src={pin}></img>Москва, ул. Юных Ленинцев, д.99</a>
        </div>
        <div className='footer__column-link social-link'>
          <a href="#" className='link-connection'><img src={facebook}></img>Facebook</a>
          <a href="#" className='link-connection'><img src={instagram}></img>Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer