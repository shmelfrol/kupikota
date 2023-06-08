import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <footer>2023</footer>
    </>
  )
}

export default Layout
