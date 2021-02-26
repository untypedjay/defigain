import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: var(--clr-text);
`;

export default function Menu() {
  return (
    <StyledNav>
      <div>Logo</div>
      <div>Home</div>
      <div>Add</div>
      <div>Upload</div>
      <div>About</div>
    </StyledNav>
  );
}