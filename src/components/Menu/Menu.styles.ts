import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: var(--clr-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    padding: 1em;
    width: 100%;
    
  }
  
  svg {
    fill: var(--clr-primary);
    width: 100%;
    transition: var(--hover-transition);
  }
  
  a:hover {
    
    svg {
      fill: var(--clr-primary-hover);
    }
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 40px;
  object-fit: contain;
`;