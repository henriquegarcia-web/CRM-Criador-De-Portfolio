import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`