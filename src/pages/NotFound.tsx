import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaMeteor } from 'react-icons/fa';
import { Button } from '../components/Button';
import {
  StyledNotFound,
  StyledErrorCode,
  StyledParagraph
} from './NotFound.styles';

export default function NotFound() {
  const history = useHistory();

  return (
    <StyledNotFound>
      <StyledErrorCode>4<FaMeteor/>4</StyledErrorCode>
      <h3>Houston, we have a problem.</h3>
      <StyledParagraph>
        Actually, the page you are looking for does not exist.
      </StyledParagraph>
      <Button onClick={() => history.push('/')}>Return Home</Button>
    </StyledNotFound>
  );
}