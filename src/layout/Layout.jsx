import React from 'react'

import Header from './Header'
import Footer from './Footer'

import styles from './Layout.module.scss'

const Layout = ({children, id=5}) => {
  console.log(id);
  return (
    <div className={styles.layout}>
      <div className={styles.layout__header}><Header /></div>
      
      {children}
      Layout
      
      <Footer />
    </div>
  )
}

export default Layout;