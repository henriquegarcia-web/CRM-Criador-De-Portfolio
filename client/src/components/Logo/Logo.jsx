import React, { Component } from 'react'

import {
  LogoContainer
} from './LogoStyle'

class Logo extends React.Component {
  render() { 
    return (
      <LogoContainer>
        <h1>CRM</h1>
        <h2>Criador de Portfolio</h2>
      </LogoContainer>
    );
  }
}
 
export default Logo;