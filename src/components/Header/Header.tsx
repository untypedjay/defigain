import React, { ChangeEvent, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';
import { Breadcrumb } from '../Breadcrumb';
import { Search } from '../Input';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  font-size: 1.2rem;
`;

export default function Header() {
  const [search, setSearch] = useState<string>('');
  const location = useLocation();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <StyledHeader>
      <Breadcrumb>{ location.pathname }</Breadcrumb>
      <Search onChange={handleSearchChange}>{ search }</Search>
      <Link to="/settings" title="Settings"><FaCog/></Link>
    </StyledHeader>
  );
}