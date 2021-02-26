import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FaMeteor } from 'react-icons/fa';
import { Button } from '../components/Button';

const StyledNotFound = styled.main`
  background-color: var(--clr-text);
  height: 100%;
`;

export default function NotFound() {
  const history = useHistory();

  return (
    <StyledNotFound>
      <p>4<FaMeteor/>4</p>
      <h3>Houston, we have a problem.</h3>
      <p>Actually, the page you are looking for does not exist.</p>
      <Button onClick={() => history.push('/')}>Return Home</Button>
    </StyledNotFound>
  );
}