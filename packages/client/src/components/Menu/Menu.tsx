import { Link } from 'react-router-dom'
import React from 'react'
import { ROUTES } from '../../constants/constants'
import MenuItem from '../MenuItem/MenuItem'
import paw from '../../../public/paw.svg'
import styles from './Menu.module.css'

export default function Menu({ sideBarHandler }) {
  return (
    <div className={styles.menuBlock}>
      {Object.entries(ROUTES).map(item => (
        <MenuItem path={item[1].PATH} title={item[1].TITLE} key={item[1].ID} />
      ))}
      <Link to="#" className={styles.paw} onClick={sideBarHandler}>
        <img src={paw} alt="paw" />
      </Link>
    </div>
  )
}
