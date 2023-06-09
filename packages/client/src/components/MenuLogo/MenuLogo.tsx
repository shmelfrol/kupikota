import React from 'react'
import logo from '../../../public/logo-Cat.png'
import styles from './MenuLogo.module.css'
import { Link } from 'react-router-dom'
const MenuLogo = () => {
  return (
    <div>
      <Link to="#" className={styles.logoMainBlock}>
        <img src={logo} alt="КУПИ КОТА" className={styles.logoImage} />
        <div className={styles.logoText}> Купи кота...</div>
      </Link>
    </div>
  )
}

export default MenuLogo
