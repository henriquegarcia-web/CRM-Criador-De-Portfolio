import styled from "styled-components";

export const UserImageContainer = styled.div` // Pega os padrões do Container
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 50%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid var(--dark-grey);
`