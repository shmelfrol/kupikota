import React from 'react'
import logo from '../../../public/logo-Cat.png'
import styles from './MenuLogo.module.css'
const MenuLogo = () => {
  return (
    <div>
      <div className={styles.logoBlock}>
        <img src={logo} alt="КУПИ КОТА" className={styles.logoImage} />
        <div className={styles.logoText}>Купи кота...</div>
      </div>
      <div>Москва</div>
    </div>
  )
}

export default MenuLogo
