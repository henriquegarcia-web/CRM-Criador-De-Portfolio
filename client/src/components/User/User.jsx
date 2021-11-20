import React from 'react'

import {
  UserContainer,
  UserImage
} from './UserStyle'

import userImage from '../../assets/UserImage.jpg'

const User = () => {

  const UserData = {
    userName: 'Henrique Garcia',
    userImage: userImage
  }

  return (
    <UserContainer>
      <h2>{UserData.userName}</h2>
      <UserImage img={UserData.userImage}></UserImage>
    </UserContainer>
  )
}

export default User
