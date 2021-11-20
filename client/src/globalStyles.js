import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
  }
`

export const FullBackground = styled.div`
  background-image: url(${props => props.bgImage});
  opacity: ${props => props.opacity};
  position: absolute;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 600px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  padding: 10px 14px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  transition: .3s;
`

export default GlobalStyle;