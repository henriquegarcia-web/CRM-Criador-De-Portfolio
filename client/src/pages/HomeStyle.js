import styled from "styled-components";

import {
  Button,
  Container
} from '../globalStyles';

export const HomePage = styled.div`
  
`

export const HomeContainer = styled(Container)`

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
    margin-top: 25px;
  }
`

export const HomeButton = styled(Button)`
  margin: 0 10px;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: black;
    color: white;
  }
`