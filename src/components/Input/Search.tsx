import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

interface Props {
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const StyledSearch = styled.div`
  background-color: var(--clr-primary);
  padding: 0.5em;
  border-radius: 20px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  
  input {
    border: 0;
    background-color: transparent;
  }
`;

export default function Search({ children, onChange, placeholder = 'Search...' }: Props) {
  return (
    <StyledSearch>
      <input value={children} onChange={onChange} placeholder={placeholder}/>
      <FaSearch/>
    </StyledSearch>
  );
}