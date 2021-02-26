import React from 'react';
import styled from 'styled-components';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  children: string;
  tabIndex?: number;
  onClick: () => void;
  title?: string;
}

const StyledButton = styled.button`
  background-color: var(--clr-accent);
  color: var(--clr-primary);
  padding: 10px 16px;
  line-height: 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--br-button);
  outline: none;
  border: 0;
  transition: var(--hover-transition);
  
  &:hover {
    background-color: var(--clr-accent-hover);
  }
  
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default function Button({
  loading = false,
  disabled = false,
  children,
  tabIndex = 0,
  onClick,
  title
}: Props) {
  const isDisabled = loading || disabled;

  return (
    <StyledButton
      type="button"
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : tabIndex}
      aria-busy={loading}
      onClick={onClick}
      title={title}
    >
      { children }
    </StyledButton>
  );
}