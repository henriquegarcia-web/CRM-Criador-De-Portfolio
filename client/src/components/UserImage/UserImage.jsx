import React from 'react'

import {
  UserImageContainer
} from './UserImageStyle'

const UserImage = ({ userImage }) => {
  return (
    <UserImageContainer img={userImage}></UserImageContainer>
  )
}

export default UserImage