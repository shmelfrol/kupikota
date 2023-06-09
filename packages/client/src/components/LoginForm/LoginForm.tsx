import React, { useState } from 'react'
import styles from './LoginForm.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ValidformData } from '../../utility/Validate'
const LoginForm = () => {
  const initialData = {
    login: '',
    password: '',
  }
  const [loginData, setLoginData] = useState(initialData)

  const onClickHandler = event => {
    event.preventDefault()
    console.log(loginData)
  }

  const SubmitHandler = event => {
    event.preventDefault()
    if (ValidformData(loginData) !== null) {
      console.log('error in LoginData!!!!')
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={SubmitHandler}>
      <Input
        type="text"
        value={loginData.login}
        name="login"
        placeholder="Введите логин"
        onChange={login => setLoginData({ ...loginData, login })}
      />
      <Input
        type="password"
        value={loginData.password}
        name="password"
        placeholder="Введите пароль"
        onChange={password => setLoginData({ ...loginData, password })}
      />
      <Button title="Войти" />
    </form>
  )
}

export default LoginForm
