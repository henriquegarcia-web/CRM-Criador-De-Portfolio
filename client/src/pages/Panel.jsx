import React, { Component } from 'react';

import {
  PanelContainer,
  HeaderMenu,
  PanelWrapper,
  PanelLimiter,
  PanelMenuContainer,
  PanelMenus,
  PanelViewContainer,
  PanelViewWrapper,
} from './PanelStyle'

import { FiChevronsLeft, FiAlignJustify } from 'react-icons/fi';

import Header from '../components/Header/Header'; // Import do HEADER
import MenuItem from '../components/MenuItem/MenuItem'; // Import dos ITENS DO MENU
import Logo from '../components/Logo/Logo'; // Import da LOGO
import UserImage from '../assets/UserImage.jpg';

import { PanelData } from '../data/PanelData/data';

const Panel = () => {
  return (
    <PanelContainer>
      <PanelWrapper>
        <PanelMenu />
        <PanelView />
      </PanelWrapper>
    </PanelContainer>
  )
}

export default Panel

class PanelMenu extends Component { // Retorna o MENU do painel
  render() {
    return (
      <PanelMenuContainer>
        <HeaderMenu userImage={UserImage}>
          <div className='header_menu__top'>
            <Logo h1Size='22px' h2Size='13px' color='rgba(255, 255, 255, 0.9)' />
            <FiChevronsLeft />
          </div>
          <h3>Henrique Garcia</h3> {/* Recebe NOME do usuário */}
          <p>https.henriquegarcia</p> {/* Recebe EMAIL do usuário */}
          <div className="user_image"></div>
        </HeaderMenu>

        <PanelMenus>
          {PanelData.menus.map(({ id, title, iconClass, subItems }) => {
            return (
              <MenuItem key={id} title={title} iconClass={iconClass} subItems={subItems} />
            )
          })}
        </PanelMenus>
      </PanelMenuContainer>
    );
  }
}

class PanelView extends Component { // Retorna o VIEW do painel
  render() { 
    return (
      <PanelViewContainer>
        <Header />
        <PanelViewWrapper>

        </PanelViewWrapper>
      </PanelViewContainer>
    );
  }
}