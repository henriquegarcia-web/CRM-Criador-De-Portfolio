import React, { Component } from 'react';

import {
  PanelContainer,
  HeaderMenu,
  PanelWrapper,
  PanelMenuContainer,
  PanelMenus,
  PanelViewContainer,
  PanelViewWrapper,
} from './PanelStyle'

import { FiChevronsLeft } from 'react-icons/fi';

import Header from '../components/Header/Header'; // Import do HEADER
import MenuItem from '../components/MenuItem/MenuItem'; // Import dos ITENS DO MENU
import Logo from '../components/Logo/Logo'; // Import da LOGO

import { PanelData } from '../data/PanelData/data';
import { UserData } from '../data/UserData/data';

const Panel = () => {
  return (
    <PanelContainer>
      <PanelWrapper>
        <PanelMenu /> {/* Retorna o MENU do painel */}
        <PanelView /> {/* Retorna o VIEW do painel */}
      </PanelWrapper>
    </PanelContainer>
  )
}

export default Panel

class PanelMenu extends Component { // Retorna o MENU do painel
  render() {
    return (
      <PanelMenuContainer>

        {/* PAINEL MENU - HEADER */}
        <HeaderMenu userImage={UserData.image}>
          {/* Logo */}
          <div className='header_menu__top'>
            <Logo h1Size='22px' h2Size='13px' color='rgba(255, 255, 255, 0.9)' />
            <FiChevronsLeft />
          </div>

          {/* Informações do Usuário */}
          <h3>{UserData.name}</h3>
          <p>{UserData.email}</p>
          <div className="user_image"></div>
        </HeaderMenu>

        {/* PAINEL MENU - MENUS */}
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

        {/* PAINEL VIEW - HEADER */}
        <Header />

        {/* PAINEL VIEW - VIEW */}
        <PanelViewWrapper>

        </PanelViewWrapper>

      </PanelViewContainer>
    );
  }
}