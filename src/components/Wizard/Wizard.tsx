import React, { useState } from 'react';
import styled from 'styled-components';
import { Stepper } from '../Stepper';
import { cardStyles } from '../../styles/CardStyle';
import { Button } from '../Button';

const StyledWizard = styled.div`
  ${cardStyles};
  width: 100%;
  height: 100%;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledWizardFooter = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  width: 100%;
`;

export default function Wizard() {
  const [activeStep, setActiveStep] = useState(1);
  const stepAmount = 3;

  const handleNext = () => {
    if (activeStep < stepAmount) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const createPortfolio = () => {
    alert('Portfolio created');
  }

  const renderWizardContent = () => {
    switch (activeStep) {
      case 1:
        return <DataSource/>;
      case 2:
        return <Widgets/>;
      case 3:
        return <Name/>;
    }
  };

  return (
    <StyledWizard>
      <Stepper
        stepAmount={stepAmount}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      { renderWizardContent() }
      <StyledWizardFooter>
        {
          activeStep > 1 &&
          <Button onClick={handlePrevious}>Previous</Button>
        }
        <Button
          onClick={activeStep === stepAmount ? createPortfolio : handleNext}
        >
          { activeStep === stepAmount ? 'Finish' : 'Next' }
        </Button>
      </StyledWizardFooter>
    </StyledWizard>
  )
}

function DataSource() {
  return (
    <div>
      <h3>Choose a Data Source</h3>
    </div>
  );
}

function Widgets() {
  return (
    <div>
      <h3>Select Widgets</h3>
    </div>
  );
}

function Name() {
  return (
    <div>
      <h3>Name Your Portfolio</h3>
    </div>
  );
}