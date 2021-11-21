import React from 'react'

import {
  MenuItemContainer
} from './MenuItemStyle'

const MenuItem = ({ title, subItems }) => {

  const selectSubItem = (eve) => {

    // document.querySelectorAll('.sub_item').classList.remove('selected')
    Array.from(document.querySelectorAll('.sub_item')).forEach((subItem) => {
      if (subItem.classList.contains('selected')) {
        subItem.classList.remove('selected')
      }
      
    })
    eve.target.classList.add('selected')
  }

  return (
    <MenuItemContainer>
      <div className='menu_item__category'>
        <p>{title}</p>
      </div>

      <div className='menu_item__sub_items'>
        {subItems.map(({ title, icon }) => {
          return (
            <div className='sub_item' onClick={selectSubItem} key={title}>{icon}{title}</div>
          )
        })}
      </div>
    </MenuItemContainer>
  )
}

export default MenuItem
