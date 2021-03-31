import React, { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function TextInput({ children, onChange, onKeyPress, placeholder }: Props) {
  return (
    <input
      value={children}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
}