import React from 'react'

import {
  HomeContainer,
  HomePage,
  HomeButton
} from './HomeStyle'

import {
  FullBackground,
  Button
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

            <HomeButton>
              <a href="/login" className="btn">
                <svg width="277" height="62">
                  <defs>
                      <linearGradient id="grad1">
                          <stop offset="0%" stopColor="#FF8282"/>
                          <stop offset="100%" stopColor="#E178ED" />
                      </linearGradient>
                  </defs>
                  <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg>
                <span>Fazer login</span>
              </a>
            </HomeButton>
            
            <HomeButton>
              <a href="/register" className="btn">
                <svg width="277" height="62">
                  <defs>
                      <linearGradient id="grad1">
                          <stop offset="0%" stopColor="#FF8282"/>
                          <stop offset="100%" stopColor="#E178ED" />
                      </linearGradient>
                  </defs>
                  <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg>
                <span>Criar uma conta</span>
              </a>
            </HomeButton>

          </div>
        </div>
      </HomeContainer>
    </HomePage>
  )
}

export default Home
