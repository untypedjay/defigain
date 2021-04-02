import React from 'react';
import { createSteps } from '../../util/converter';
import { StyledWrapper, StyledStep, StyledStepBadge } from './Stepper.styles';

interface Props {
  stepAmount?: number;
  activeStep: number;
  setActiveStep: (step: number) => void;
}

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