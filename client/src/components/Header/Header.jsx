import React, { Component } from 'react'

import {
  HeaderContainer,
  HeaderLimiter,
  HeaderLogo,
  HeaderSettings
} from './HeaderStyle'

import Logo from '../Logo/Logo';
import User from '../User/User'

class Header extends Component {
  render() { 
    return (
      <HeaderContainer>
        <HeaderLimiter>
          <HeaderLogo>
            <Logo h1Size='28px' h2Size='18px' />
          </HeaderLogo>
          <HeaderSettings>
            <User />
          </HeaderSettings>
        </HeaderLimiter>
      </HeaderContainer>
    );
  }
}
 
export default Header;