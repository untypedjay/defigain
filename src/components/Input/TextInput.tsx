import React, { ChangeEvent } from 'react';

interface Props {
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function TextInput({ children, onChange, placeholder }: Props) {
  return (
    <input value={children} onChange={onChange} placeholder={placeholder}/>
  );
}