import React, { ChangeEvent } from 'react';

interface Props {
  children: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ children, onChange}: Props) {
  return (
    <input value={children} onChange={onChange}/>
  );
}