import React from 'react'

import {
  HomeContainer,
  HomePage,
  HomeButton
} from './HomeStyle'

import {
  FullBackground
} from '../globalStyles'

import { HomeData } from '../data/HomeData/data'

const Home = () => {
  return (
    <HomePage>
      <FullBackground bgImage={HomeData.bgImage} opacity={HomeData.bgOpacity}></FullBackground>
      
      <HomeContainer>
        <div className='home__content'>
          <h1>Crie seu portfolio.</h1>

          <div className='home__buttons'>
            <HomeButton>Fazer login</HomeButton>
            <HomeButton>Criar uma conta</HomeButton>
          </div>
        </div>
      </HomeContainer>
    </HomePage>
  )
}

export default Home
