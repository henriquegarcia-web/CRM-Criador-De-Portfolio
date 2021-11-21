import styled from "styled-components";

import {
  Button,
  Container
} from '../globalStyles';

export const HomePage = styled.div``

export const HomeContainer = styled(Container)`

  .home__content {
    h1 {
      font-weight: 700;
      font-size: 50px;
      letter-spacing: 1px;
      text-align: center;
      color: var(--grey);
    }
  }

  .home__buttons {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`

export const HomeButton = styled(Button)``