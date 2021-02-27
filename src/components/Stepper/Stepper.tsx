import React from 'react';
import styled, { css } from 'styled-components';
import { createSteps } from '../../util/converter';

interface StyledStepProps {
  isCurrentStep: boolean;
  isActive: boolean;
}

interface StyledStepBadgeProps {
  isActive: boolean;
}

interface Props {
  stepAmount?: number;
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const sharedStyles = css`
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 50%;
  height: 3px;
  background: var(--clr-text);
`;

const pseudoStyles = css`
  &::before {
    ${sharedStyles};
    left: 0;
    ${(p: any) => p.isActive && `background: var(--clr-accent)`};
  }
  
  &::after {
    ${sharedStyles};
    left: 50%;
    ${(p: any) => 
      p.isActive && !p.isCurrentStep && `background: var(--clr-accent)`
    };
  }
  
  &:first-child::before,
  &:last-child::after {
    display: none;
  }
`;

const StyledStep = styled.button.attrs((props: StyledStepProps) => ({
  isCurrentStep: props.isCurrentStep,
  isActive: props.isActive
}))`
  position: relative;
  border: 0;
  padding: 0;
  width: 25%;
  text-align: center;
  background: transparent;
  cursor: pointer;
  outline: none;
  ${pseudoStyles};
`;

const StyledStepBadge = styled.span.attrs(
  (props: StyledStepBadgeProps) => ({
    isActive: props.isActive
}))`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(p: any) => 
    p.isActive ? 'var(--clr-secondary)' : 'var(--clr-primary)'
  };
  background: ${(p: any) =>
    p.isActive ? 'var(--clr-accent)' : 'var(--clr-text)'
  };
`;

export default function Stepper({
  stepAmount = 4,
  activeStep,
  setActiveStep
}: Props) {
  const steps = createSteps(stepAmount);

  const isActive = (step: number) => step <= activeStep;

  const isCurrentStep = (step: number) => step === activeStep;

  return (
    <StyledWrapper>
      {
        steps.map((step: number) => (
          <StyledStep
            key={step}
            onClick={() => setActiveStep(step)}
            isCurrentStep={isCurrentStep(step)}
            isActive={isActive(step)}
          >
            <StyledStepBadge isActive={isActive(step)}>
              { step }
            </StyledStepBadge>
          </StyledStep>
        ))
      }
    </StyledWrapper>
  );
}