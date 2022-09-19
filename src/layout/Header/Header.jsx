import React from 'react'

import './Header.scss';

import pin from './pin.svg';
import account from './account.svg';
import arrow_down from './arrow_down.svg';
import logo from './logo.svg';
import cart from './cart.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__delivery-info'>
        <div className='delivery-info__location'>
          <img src={pin} className='location__logo'></img>
          Москва
        </div>
        <a href='#' className='delivery-info__check-location'>Проверить адрес</a>
        <p className='delivery-info__average-delivery-time'>Среднее время доставки*: <span className='average-delivery-time__actual'>00:24:19</span></p>
        <p className='delivery-info__work-time'>Время работы: с 11:00 до 23:00</p>
        <button className='delivery-info__account'>
          <img src={account} className='account__logo'></img>
          Войти в аккаунт
        </button>
      </div>
      <div className='header__menu'>
        <div className='menu__logo'>
          <img src={logo} className='logo__img'></img>
          Куда пицца
        </div>
        
        <button className='menu__cart'>
          <img src={cart} className='cart__logo'></img>
          0 ₽
        </button>
      </div>
    </header>
  )
}

export default Header