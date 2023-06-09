import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu'

import styles from './Header.module.css'
import MenuLogo from '../MenuLogo/MenuLogo'
import SideBar from '../Sidebar/SideBar'
import Modal from '../Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'
const Header = () => {
  const [sideBar, setSideBar] = useState(true)
  const [modal, setModal] = useState(false)
  const ClickSidebarHandler = () => {
    console.log(sideBar)
    setSideBar(!sideBar)
  }

  const clickModalHandler = () => {
    setModal(!modal)
  }

  return (
    <>
      <header className={styles.header}>
        <MenuLogo />
        <Menu sideBarHandler={ClickSidebarHandler} />

        <div className={styles.login} onClick={clickModalHandler}>
          ВОЙТИ
        </div>
      </header>
      <SideBar sidebar={sideBar} sideBarHandler={ClickSidebarHandler} />
      {modal && (
        <Modal clickModalHandler={clickModalHandler}>
          <LoginForm />
        </Modal>
      )}
    </>
  )
}

export default Header
