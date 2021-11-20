import React, { Component } from 'react';

import {
  PanelContainer,
  PanelWrapper,
  PanelLimiter,
  PanelMenuContainer,
  PanelMenus,
  PanelViewContainer,
  PanelViewWrapper,
} from './PanelStyle'

import Header from '../components/Header/Header';
import MenuItem from '../components/MenuItem/MenuItem';

import { PanelData } from '../data/PanelData/data';

const Panel = () => {
  return (
    <PanelContainer>
      <Header />

      <PanelWrapper>
        <PanelLimiter>

          <PanelMenu />
          <PanelView />
        
        </PanelLimiter>
      </PanelWrapper>
    </PanelContainer>
  )
}

export default Panel

// Retorna o MENU do painel
class PanelMenu extends Component {
  render() {
    return (
      <PanelMenuContainer>
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

// Retorna o VIEW do painel
class PanelView extends Component {
  render() { 
    return (
      <PanelViewContainer>
        <PanelViewWrapper>

        </PanelViewWrapper>
      </PanelViewContainer>
    );
  }
}