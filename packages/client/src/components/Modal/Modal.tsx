import React from 'react'
import styles from './Modal.module.css'
import * as AiIcons from 'react-icons/ai'
const Modal = ({ clickModalHandler, children }) => {
  return (
    <div className={styles.modal}>
      <AiIcons.AiOutlineClose
        className={styles.closeIcon}
        onClick={clickModalHandler}
      />
      <div className={styles.childrenBlock}>{children}</div>
    </div>
  )
}

export default Modal
