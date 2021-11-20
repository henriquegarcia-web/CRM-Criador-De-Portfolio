import styled from "styled-components";

// import {
//   HorizontalLimiter
// } from '../../globalStyles';

export const MenuItemContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  transition: .2s;

  .menu_item__category {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    margin-bottom: 5px;

    .main_icon {
      color: rgba(0, 0, 0, 0.8);
      font-size: 18px;
      margin-right: 10px;
      transition: .2s;
    }

    p {
      color: rgba(0, 0, 0, 0.8);
      margin-right: auto;
      font-size: 18px;
      font-weight: 500;
      transition: .2s;
    }

    .icon {
      color: rgba(0, 0, 0, 0.8);
      font-size: 18px;
      transition: .2s;
    }
  }

  .menu_item__sub_items {
    /* padding: 10px 25px; */
    
    .sub_item {
      /* margin-bottom: 10px; */
      transition: .2s;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 300;

      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    }
  }

  &:hover {
    .main_icon, p, .icon {
      color: rgba(0, 0, 0, 1);
    }
  }
`