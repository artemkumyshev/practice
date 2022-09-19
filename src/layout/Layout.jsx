import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'

import styles from './Layout.module.scss'

const Layout = ({id=5}) => {
  console.log(id);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__header}><Header /></div>
      
      <Outlet />
      
      <Footer />
    </div>
  )
}

export default Layout;