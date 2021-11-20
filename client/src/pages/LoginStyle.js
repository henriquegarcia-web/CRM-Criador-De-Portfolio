import styled from "styled-components";

import {
  Button,
  Container,
  Input
} from '../globalStyles';

export const RegisterPage = styled.div`
  
`

export const RegisterContainer = styled(Container)`
  
`

export const RegisterForm = styled.form`
  width: 100%;
  max-width: 380px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 30px;
  /* background: rgba(0, 0, 0, 0.015); */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`

export const RegisterInputContainer = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 24px;
    width: 30px;
    margin-right: 10px;
  }
`

export const RegisterInput = styled(Input)`
  width: calc(100% - 40px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 10px;
`

export const RegisterSubmit = styled(Button)`
  display: flex;
  margin: 30px auto 0 auto;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 6px;
  background: transparent;

  &:hover {
    background: black;
    color: white;
  }
`