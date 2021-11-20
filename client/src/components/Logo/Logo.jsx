import React from 'react'

import {
  LogoContainer
} from './LogoStyle'

const Logo = ({ h1Size, h2Size, mgBottom, color }) => {
  return (
    <LogoContainer h1Size={h1Size} h2Size={h2Size} mgBottom={mgBottom} color={color} >
      <h1>CRM</h1>
      <h2>Criador de Portfolio</h2>
    </LogoContainer>
  )
}

export default Logo
