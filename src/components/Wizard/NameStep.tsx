import React, { ChangeEvent } from 'react';
import { TextInput } from '../Input';

interface Props {
  name: string;
  setName: (newInput: string) => void;
}

export default function NameStep({ name, setName }: Props) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h3>Name Your Portfolio</h3>
      <TextInput
        onChange={handleInputChange}
        placeholder="Enter portfolio name..."
      >
        { name }
      </TextInput>
    </div>
  );
}