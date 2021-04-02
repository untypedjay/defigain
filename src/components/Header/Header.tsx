import React, { ChangeEvent, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { Breadcrumb } from '../Breadcrumb';
import { Search } from '../Input';
import { SETTINGS_ROUTE } from '../../constants';
import { StyledHeader } from './Header.styles';

export default function Header() {
  const [search, setSearch] = useState('');
  const location = useLocation();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <StyledHeader>
      <Breadcrumb>{ location.pathname }</Breadcrumb>
      <Search onChange={handleSearchChange}>{ search }</Search>
      <Link to={SETTINGS_ROUTE} title="Settings"><FaCog/></Link>
    </StyledHeader>
  );
}