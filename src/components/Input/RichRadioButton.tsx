import React, { ReactNode } from 'react';
import { StyledRadioButtonCard, StyledLabel } from './RichRadioButton.styles';

interface Props {
  children: ReactNode;
  name: string;
  id: string;
  checked: boolean;
  heading: string;
  text: string;
  onChange: (newValue: string) => void;
}

export default function RichRadioButton({
  children,
  name,
  id,
  checked,
  heading,
  text,
  onChange
}: Props) {
  return (
    <StyledRadioButtonCard
      onClick={() => onChange(id)}
      isActive={checked}
    >
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={checked}
      />
      <StyledLabel htmlFor={id}>
        <h3>{ heading }</h3>
        { children }
        <p>{ text }</p>
      </StyledLabel>
    </StyledRadioButtonCard>
  );
}