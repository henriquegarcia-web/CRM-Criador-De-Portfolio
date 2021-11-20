import React from 'react'

import {
  MenuItemContainer
} from './MenuItemStyle'

const MenuItem = ({ title, iconClass, subItems }) => {

  console.log(subItems)

  return (
    <MenuItemContainer>
      <div className='menu_item__category'>
        <i className={`main_icon ${iconClass}`}></i>
        <p>{title}</p>
        <i className="icon fas fa-angle-down"></i>
      </div>

      <div className='menu_item__sub_items'>
        {subItems.map(({ title }) => {
          return (
            <div className='sub_item'>{title}</div>
          )
        })}
      </div>
    </MenuItemContainer>
  )
}

export default MenuItem
