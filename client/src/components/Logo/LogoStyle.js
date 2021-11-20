import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-bottom: ${props => props.mgBottom};
  color: ${props => props.color};

  h1 {
    font-size: ${props => props.h1Size};
    font-weight: 800;
    letter-spacing: 1px;
  }

  h2 {
    font-size: ${props => props.h2Size};
    font-weight: 600;
  }
`