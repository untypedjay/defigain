import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FaMeteor } from 'react-icons/fa';
import { Button } from '../components/Button';

const StyledNotFound = styled.main`
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

const StyledErrorCode = styled.p`
  font-size: 15.6rem;
  margin: 0;
`;

const StyledParagraph = styled.p`
  margin: 1em 0 2em 0;
  font-size: 1.4rem;
`;

export default function NotFound() {
  const history = useHistory();

  return (
    <StyledNotFound>
      <StyledErrorCode>4<FaMeteor/>4</StyledErrorCode>
      <h3>Houston, we have a problem.</h3>
      <StyledParagraph>Actually, the page you are looking for does not exist.</StyledParagraph>
      <Button onClick={() => history.push('/')}>Return Home</Button>
    </StyledNotFound>
  );
}