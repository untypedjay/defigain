import React, { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { StyledSearch } from './Search.styles';

interface Props {
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Search({
 children,
 onChange,
 placeholder = 'Search...'
}: Props) {
  return (
    <StyledSearch>
      <input value={children} onChange={onChange} placeholder={placeholder}/>
      <FaSearch/>
    </StyledSearch>
  );
}