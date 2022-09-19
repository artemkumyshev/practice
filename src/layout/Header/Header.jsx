import React from "react";
import cn from "classnames";

import LocationCity from "../../components/LocationCity";

import styles from "./Header.module.scss";

import pin from "./pin.svg";
import account from "./account.svg";
import arrow_down from "./arrow_down.svg";
import logo from "./logo.svg";
import cart from "./cart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.topbar__wrapper}>
            <LocationCity />
            <a href="#" className={styles.topbar__info}>
              Проверить адрес
            </a>
            <div className={styles.topbar__info}>
              Среднее время доставки*: <b>00:24:19</b>
            </div>
            <div className={cn(styles.topbar__info, styles.topbar__right)}>
              Время работы: с 11:00 до 23:00
            </div>
            <button className={styles.topbar__login}>
              <img
                src={account}
                className={styles["topbar__login-icon"]}
                alt="Иконка войти"
              />
              Войти в аккаунт
            </button>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigation__logo}>
          <img src={logo} className={styles["logo__img"]} alt="Логотип" />
          Куда пицца
        </div>

        <ul className={styles.navigation__menu}>
          <li className={styles["navigation__menu-item"]}></li>
        </ul>

        <button className={styles.navigation__cart}>
          <img
            src={cart}
            className={styles["navigation__cart-logo"]}
            alt="Иконка корзины"
          />
          0 ₽
        </button>
      </div>
    </header>
  );
};

export default Header;
