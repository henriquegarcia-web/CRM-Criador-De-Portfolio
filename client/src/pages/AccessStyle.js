import styled from "styled-components";

import {
  Container,
  Input,
  Button
} from '../globalStyles';

export const AccessPage = styled(Container)` // Pega os padrões do Container
  
`

export const AccessForm = styled.form`
  position: absolute; 
  width: 100%;
  max-width: 410px;
  border: 2px solid var(--grey);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 15px rgba(37, 47, 62, 0.1);
  /* background: rgba(37, 47, 62, 0.01); */
`

export const AccessFormHeader = styled.div`
  background: var(--grey);
  padding: 30px 30px 8px 30px;
  position: relative;
  width: calc(100% + 60px);
  transform: translate(-30px, -30px);
  margin-bottom: 6px;
  border-radius: 6px 6px 0 0;

  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    h3 {
      border-left: 2px solid rgba(255, 255, 255, 0.7);
      padding-left: 10px;
      font-size: 28px;
      font-weight: 100;
      color: white;
    }

    a {
      font-size: 13px;
      text-decoration: none;
      font-weight: 200;
      color: white;
      letter-spacing: 0.5px;
      text-align: right;
      padding-left: 20px;
      transition: .1s ease;
      max-width: 140px;

      &:hover {
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
      }
    }
  }
`

export const AccessInputContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    width: 30px;
    margin-right: 10px;
    color: var(--grey);
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-size: 18px;
    font-weight: 300;
    padding: 10px 16px;
    color: rgba(37, 47, 62, 0.8);
    width: calc(100% - 110px);
    border: 1px solid rgba(37, 47, 62, 0.4);
    border-radius: 6px;
    margin: 10px;
    display: inline-block;
    cursor: pointer;
    transition: .2s;
  }

  .inputfile + label:hover {
    border: 1px solid rgba(37, 47, 62, 1);
    color: rgba(37, 47, 62, 1);
  }

  .inputicon {
    margin: 0 0px 0 0 !important;
    padding: 0 !important;
  }
`

export const AccessInput = styled(Input)`
  width: calc(100% - 40px);
  border: 1px solid rgba(37, 47, 62, 0.4);
  border-radius: 6px;
  margin: 10px;
`

export const AccessButton = styled(Button)``

export const AccessInputImageVerify = styled.div`
  border: 2px solid rgba(37, 47, 62, 0.8);
  border-radius: 6px;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }
`