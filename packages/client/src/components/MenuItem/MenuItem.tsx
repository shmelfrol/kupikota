import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.css'

const MenuItem = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        isActive
          ? `${styles.menuItem} ${styles.menuItemActive}`
          : `${styles.menuItem}`
      }>
      {title}
    </NavLink>
  )
}

export default MenuItem
