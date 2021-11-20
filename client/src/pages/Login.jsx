import React, { Component } from 'react'

import {
  RegisterPage,
  RegisterContainer,
  RegisterForm,
  RegisterInputContainer,
  RegisterInput,
  RegisterSubmit
} from './LoginStyle'

import {
  FullBackground
} from '../globalStyles'

import Logo from '../components/Logo/Logo'

import { LoginData } from '../data/LoginData/data'

const Login = ({ data }) => {
  return (
    <RegisterPage>
      <FullBackground bgImage={LoginData.bgImage} opacity={LoginData.bgOpacity}></FullBackground>

      <RegisterContainer>
        <RegisterForm>
          <Logo />

          {data.map(({id, placeholder, iconClass}) => {
            return (
              <RenderInputs key={id}  placeholder={placeholder} iconClass={iconClass} />
            )
          })}

          <RegisterSubmit>Finalizar</RegisterSubmit>
        </RegisterForm>
      </RegisterContainer>
    </RegisterPage>
  )
}

export default Login

const RenderInputs = ({ placeholder, iconClass }) => {
  return (
    <RegisterInputContainer>
      <i className={`icon ${iconClass}`}></i>
      <RegisterInput type='text' placeholder={placeholder} />
    </RegisterInputContainer>
  )
}
