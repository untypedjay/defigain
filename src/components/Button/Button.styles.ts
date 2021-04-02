import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--clr-accent);
  color: var(--clr-primary);
  padding: 10px 16px;
  line-height: 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--br-button);
  outline: none;
  border: 0;
  transition: var(--hover-transition);
  
  &:hover {
    background-color: var(--clr-accent-hover);
  }
  
  &:not(:disabled) {
    cursor: pointer;
  }
`;