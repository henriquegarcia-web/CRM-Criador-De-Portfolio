import styled from "styled-components";

import {
  Button
} from '../globalStyles';

export const HomePage = styled.div`
  
`

export const HomeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .home__content {
    h1 {
      font-weight: 700;
      font-size: 50px;
      letter-spacing: 1px;
    }
  }

  .home__buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`

export const HomeButton = styled(Button)`
  margin: 0 10px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  background: transparent;

  &:hover {
    background: black;
    color: white;
  }
`