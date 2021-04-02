import styled from 'styled-components';

interface StyledRadioButtonCardProps {
  isActive: boolean;
}

export const StyledRadioButtonCard = styled.div.attrs(
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

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;