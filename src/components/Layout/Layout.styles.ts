import styled from 'styled-components';

export const StyledLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: 80px auto;
  
  nav {
    grid-row-end: span 2;
  }
`;

export const StyledContent = styled.main`
  background-color: var(--clr-primary);
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;