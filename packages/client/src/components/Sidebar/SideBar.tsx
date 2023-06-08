import React from 'react'
import { ROUTES } from '../../constants/constants'
import SideBarItem from '../SidebarItem/SideBarItem'
import styles from './SideBar.module.css'

import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
const SideBar = ({ sidebar, sideBarHandler }) => {
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className={sidebar ? styles.sideBarMenu : styles.sideBarMenuActive}>
        <AiIcons.AiOutlineClose
          className={styles.closeIcon}
          onClick={sideBarHandler}
        />
        {Object.entries(ROUTES).map(item => (
          <SideBarItem
            path={item[1].PATH}
            title={item[1].TITLE}
            key={item[1].ID}
            sideBarHandler={sideBarHandler}
            icon={item[1].ICON}
          />
        ))}
      </div>
    </IconContext.Provider>
  )
}

export default SideBar
