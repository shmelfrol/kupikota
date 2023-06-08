import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu'

import styles from './Header.module.css'
import MenuLogo from '../MenuLogo/MenuLogo'
import SideBar from '../Sidebar/SideBar'
const Header = () => {
  const [sideBar, setSideBar] = useState(true)
  const ClickSidebarHandler = () => {
    console.log(sideBar)
    setSideBar(!sideBar)
  }

  return (
    <>
      <header className={styles.header}>
        <MenuLogo />
        <Menu sideBarHandler={ClickSidebarHandler} />

        <div>Войти</div>
      </header>
      <SideBar sidebar={sideBar} sideBarHandler={ClickSidebarHandler} />
    </>
  )
}

export default Header
