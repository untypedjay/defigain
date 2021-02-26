import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumb } from '../Breadcrumb';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 1.2rem;
`;

export default function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Breadcrumb>{ location.pathname }</Breadcrumb>
      <div>Search Bar</div>
      <div>Settings</div>
    </StyledHeader>
  );
}