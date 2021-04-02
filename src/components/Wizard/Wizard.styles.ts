import styled from 'styled-components';
import { cardStyles } from '../../styles/CardStyle';

export const StyledWizard = styled.div`
  ${cardStyles};
  width: 100%;
  height: 80%;
  padding: 3em;
  margin: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooter = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  width: 100%;
`;