import styled from "styled-components";

import {
  HorizontalLimiter
} from '../globalStyles';

export const PanelContainer = styled.div`

`

export const PanelWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`

export const PanelLimiter = styled(HorizontalLimiter)`
  height: fit-content;
  display: flex;
`


// ---------------- PAINEL MENU

export const PanelMenuContainer = styled.div`
  width: 240px;
  height: calc(100vh - 80px);
  background: rgba(0, 0, 0, 0.02); 
  padding: 30px 20px;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.03);
`

export const PanelMenus = styled.div`
  /* outline: 1px solid black; */
`

// ---------------- PAINEL VIEW

export const PanelViewContainer = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 80px);
  background: rgba(0, 0, 0, 0); 
  padding: 30px 20px;
`

export const PanelViewWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: 100%;
  border-radius: 6px;
`