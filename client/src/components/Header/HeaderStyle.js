import styled from "styled-components";

// ------------------------ HEADER

export const HeaderContainer = styled.div`
  background: rgba(37, 47, 62, 0.1);
  border-bottom: 1px solid rgba(37, 47, 62, 0.1);

  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 30px;
`

// ------------------------ SETTINGS

export const HeaderSettings = styled.div`
  display: flex;
  align-items: center;
`

export const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 50px;
  transition: .2s;

  &:nth-of-type(1) {
    margin-right: 30px;
  }

  &:nth-of-type(4) {
    margin: 0;
  }

  &:hover {
    background: rgba(27, 35, 48, 0.08);

    svg {
      color: rgba(37, 47, 62, 1);
    }
  }

  svg {
    font-size: 22px;
    color: rgba(37, 47, 62, 0.7);
    transition: .2s;
  }
`

// ------------------------ USER

export const HeaderUser = styled.div`
  
`

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 10px;
  transition: .2s;

  &:hover {
    background: rgba(27, 35, 48, 0.08);

    p {
      color: rgba(27, 35, 48, 0.85);
    }

    .user_option {
      display: flex;
    }
  }
  
  p {
    text-transform: capitalize;
    color: rgba(27, 35, 48, 0.75);
    font-size: 16px;
    font-weight: 500;
    transition: .2s;
  }
`

export const UserImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: url(${props => props.userImage});
  background-position: center;
  background-size: cover;
  margin-left: 14px;
`

export const UserMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--light-grey);

  .user_option {
    display: flex;
    align-items: center;
    padding: 12px 10px;
    width: 100%;
    cursor: pointer;
    transition: .2s;
    display: none;
    font-size: 16px;
    font-weight: 400;
    color: rgba(27, 35, 48, 0.75);

    &:hover {
      background: rgba(27, 35, 48, 0.1);
      color: rgba(27, 35, 48, 0.9);

      svg {
        color: rgba(27, 35, 48, 0.9);
      }
    }

    svg {
      color: rgba(27, 35, 48, 0.75);
      font-size: 18px;
      margin-right: 10px;
    }
  }
`