import React, { Component } from 'react'

import {
  HeaderContainer,
  HeaderUser,
  HeaderSettings,
  SettingContainer,
  UserContainer,
  UserImage,
  UserMenu,
} from './HeaderStyle'

import { PanelData } from '../../data/PanelData/data';
import { UserData } from '../../data/UserData/data';

class Header extends Component {
  render() { 
    return (
      <HeaderContainer>
        <HeaderSettings>
          {PanelData.settings.map(({id , icon}) => {
            return (
              <SettingContainer key={id}>
                {icon}
              </SettingContainer>
            )
          })}
        </HeaderSettings>
        <HeaderUser>
          <User />
        </HeaderUser>
      </HeaderContainer>
    );
  }
}
 
export default Header;

const User = () => {
  return (
    <UserContainer>
      <p>{UserData.name}</p>
      <UserImage userImage={UserData.image}></UserImage>

      <UserMenu>
        <div className='user_option'>{UserData.userMenu[0].icon}{UserData.userMenu[0].title}</div>
        <div className='user_option'>{UserData.userMenu[1].icon}{UserData.userMenu[1].title}</div>
      </UserMenu>
    </UserContainer>
  )
}