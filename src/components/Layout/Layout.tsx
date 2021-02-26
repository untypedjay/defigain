import React, { ReactNode } from 'react';
import { Menu } from '../Menu';
import { Header } from '../Header';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const StyledLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: 80px auto;
  
  nav {
    grid-row-end: span 2;
  }
`;

const StyledContent = styled.main`
  background-color: var(--clr-primary);
`;

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <Menu/>
      <Header/>
      <StyledContent>{ children }</StyledContent>
    </StyledLayout>
  );
}