import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { FaKeyboard, FaWallet } from 'react-icons/fa';
import { Stepper } from '../Stepper';
import { Button } from '../Button';
import { RichRadioButton, TextInput } from '../Input';
import { cardStyles } from '../../styles/CardStyle';
import { StyledFlexbox } from '../../styles/FlexboxStyle';

const StyledWizard = styled.div`
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
  const [input, setInput] = useState<string>();
  const iconSize = '50px';

  const handleInputChange = (newInput: string) => {
    setInput(newInput);
  };

  return (
    <div>
      <h3>Choose a Data Source</h3>
      <StyledFlexbox>
        <RichRadioButton
          name="data-source"
          id="automatic"
          checked={input === 'automatic'}
          heading="Automatic"
          text="Connect your wallet address"
          onChange={handleInputChange}
        >
          <FaWallet size={iconSize}/>
        </RichRadioButton>
        <RichRadioButton
          name="data-source"
          id="manually"
          checked={input === 'manually'}
          heading="Manually"
          text="Add data to the app manually"
          onChange={handleInputChange}
        >
          <FaKeyboard size={iconSize}/>
        </RichRadioButton>
      </StyledFlexbox>
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
  const [name, setName] = useState<string>('');

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