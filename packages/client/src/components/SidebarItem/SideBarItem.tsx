import React from 'react'
import styles from './SideBarItem.module.css'
import { NavLink } from 'react-router-dom'

const SideBarItem = ({ path, title, icon, sideBarHandler }) => {
  return (
    <NavLink
      to={path}
      onClick={sideBarHandler}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.sideBarItemActive}` : `${styles.sideBarItem}`
      }>
      <div className={styles.sideBarItemIcon}>{icon}</div>
      {title}
    </NavLink>
  )
}

export default SideBarItem
