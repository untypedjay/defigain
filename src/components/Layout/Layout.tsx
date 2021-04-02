import React, { ReactNode } from 'react';
import { Menu } from '../Menu';
import { Header } from '../Header';
import { StyledLayout, StyledContent } from './Layout.styles';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <Menu/>
      <Header/>
      <StyledContent>{ children }</StyledContent>
    </StyledLayout>
  );
}