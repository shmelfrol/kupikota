import React, { useState } from 'react'
import styles from './Input.module.css'
import { ValidateField } from '../../utility/Validate'

const Input = ({ type, name, placeholder, onChange, value }) => {
  const [error, setError] = useState(null)
  const onChangeHandler = event => {
    const target = event.target
    setValue(target.value)
    console.log(target.value)
  }
  const onBlurHandler = event => {
    const target = event.target
    //console.log("onblurrrr", target.name, target.value)
    setError(ValidateField(target.name, target.value))
  }
  return (
    <div className={styles.inputBlock}>
      <input
        type={type}
        name={name}
        value={value}
        //onChange={onChangeHandler}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlurHandler}
        className={styles.inputs}
        placeholder={placeholder}
      />
      <div className={styles.errorBlock}>
        &nbsp;{error !== null ? error : ''}
      </div>
    </div>
  )
}

export default Input
