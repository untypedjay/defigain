import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  name: string;
  id: string;
  checked: boolean;
  heading: string;
  text: string;
  onChange: (newValue: string) => void;
}

interface StyledRadioButtonCardProps {
  isActive: boolean;
}

const StyledRadioButtonCard = styled.div.attrs(
  (props: StyledRadioButtonCardProps) => ({
    isActive: props.isActive
}))`
  transition: var(--hover-transition);
  border-radius: var(--br-card);
  border: var(--card-border);
  padding: 1em;
  width: 100%;
  min-width: 270px;
  background-color: ${(p: any) => 
    p.isActive ? 'var(--clr-accent)' : 'var(--clr-primary)'
  };
  color: ${(p: any) =>
    p.isActive ? 'var(--clr-secondary)' : 'var(--clr-text)'
  };

  input {
    display: none;
  }

  &:hover {
    background-color: ${(p: any) =>
            p.isActive ? 'var(--clr-accent-hover)' : 'var(--clr-primary-hover)'
    };
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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