import styled from "styled-components";

import {
  HorizontalLimiter
} from '../../globalStyles';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  background: rgba(0, 0, 0, 0.05); 
  border-bottom: 1px solid rgba(0, 0, 0, 0.02);
  padding: 0 20px;
`

export const HeaderLimiter = styled(HorizontalLimiter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div`
  
`

export const HeaderSettings = styled.div`
  
`