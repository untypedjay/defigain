import styled from 'styled-components';

export const StyledNotFound = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--clr-text);
  height: 100%;
  color: var(--clr-primary);
  
  h3 {
    font-size: 3.5rem;
  }
`;

export const StyledErrorCode = styled.p`
  font-size: 15.6rem;
  margin: 0;
`;

export const StyledParagraph = styled.p`
  margin: 1em 0 2em 0;
  font-size: 1.4rem;
`;