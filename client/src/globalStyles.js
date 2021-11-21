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

  :root {
    --dark-grey: #1B2330; // rgba(27, 35, 48, 0.8)
    --grey: #252F3E; // rgba(37, 47, 62, 0.8)
    --light-grey: #d1d3d5; // rgba(209, 211, 213, 0.8)
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
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.div`
  .btn {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    display: inline-block;
    width: 277px;
    height: 50px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
  }

  .btn svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn svg rect {
    stroke: var(--grey);
    stroke-width: 2;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
  }

  .btn span{
    color: var(--grey);
  }

  .btn:hover svg rect {
    stroke-width: 2;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
  }
`

export const Input = styled.input`
  font-size: 18px;
  font-weight: 300;
  padding: 10px 16px;
`

export const HorizontalLimiter = styled.div`
  width: 100%;
  max-width: 1800px;
`

export default GlobalStyle;