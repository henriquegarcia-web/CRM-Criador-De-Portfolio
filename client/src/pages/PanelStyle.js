import styled from "styled-components";

// ---------------- PAINEL GENERAL

export const PanelContainer = styled.div``

export const PanelWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`

// ---------------- PAINEL MENU

export const PanelMenuContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: var(--grey); 
  box-shadow: 0 0 15px rgba(37, 47, 62, 0.4);
`

export const PanelMenus = styled.div`
  padding: 30px 10px 10px 10px;
`

export const HeaderMenu = styled.div`
  margin-bottom: 30px;
  height: 200px;
  background: var(--dark-grey);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  position: relative;

  .header_menu__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      color: rgba(255, 255, 255, 0.8);
      font-size: 26px;
      cursor: pointer;
      transition: .2s;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  h3 {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 50px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  p {
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    margin-top: 4px;
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .user_image {
    background-image: url(${props => props.userImage});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 7px solid var(--grey);
  }
`

// ---------------- PAINEL VIEW

export const PanelViewContainer = styled.div`
  width: calc(100% - 300px); // 100% - width do menu
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
`

export const PanelViewWrapper = styled.div`
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(100% - 60px);
  height: calc(100% - 120px);
  margin: 30px;
  border-radius: 4px;
`