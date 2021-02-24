import React, { MouseEvent } from 'react';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  children: string;
  tabIndex?: number;
  onClick: () => void;
}

export default function Button({
  loading = false,
  disabled = false,
  children,
  tabIndex = 0,
  onClick
}: Props) {
  const isDisabled = loading || disabled;

  return (
    <button
      type="button"
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : tabIndex}
      aria-busy={loading}
      onClick={onClick}
    >
      { children }
    </button>
  );
}