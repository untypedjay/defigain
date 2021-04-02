import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  children: string;
  tabIndex?: number;
  onClick: () => void;
  title?: string;
}

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