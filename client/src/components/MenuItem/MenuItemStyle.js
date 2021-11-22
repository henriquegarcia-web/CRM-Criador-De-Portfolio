import styled from "styled-components";

export const MenuItemContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;

  .menu_item__category {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 5px;

    p {
      color: rgba(255, 255, 255, 0.90);
      font-size: 16px;
      font-weight: 400;
      transition: .2s;
    }
  }

  .menu_item__sub_items {    
    .sub_item {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 300;
      transition: .2s;

      &:hover {
        background: rgba(27, 35, 48, 0.6);
        color: rgba(255, 255, 255, 0.95);

        svg {
          color: rgba(255, 255, 255, 0.95);
        }
      }

      &.selected {
        background: rgba(27, 35, 48, 0.6);
        color: rgba(255, 255, 255, 0.95);
      }

      svg {
        color: rgba(255, 255, 255, 0.7);
        font-size: 18px;
        margin-right: 10px;
        transition: .2s;
        pointer-events: none;
      }
    }
  }
`