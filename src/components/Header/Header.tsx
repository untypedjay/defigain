import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>Breadcrumb</div>
      <div>Search Bar</div>
      <div>Settings</div>
    </StyledHeader>
  );
}