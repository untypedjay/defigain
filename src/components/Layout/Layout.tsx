import React, { ReactNode } from 'react';
import { Menu } from '../Menu';
import { Header } from '../Header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Menu/>
      <Header/>
      { children }
    </div>
  );
}