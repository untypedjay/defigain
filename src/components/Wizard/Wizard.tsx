import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DataSourceStep, DataInputStep, WidgetsStep, NameStep } from '.';
import { Stepper } from '../Stepper';
import { Button } from '../Button';
import { StyledWizard, StyledFooter } from './Wizard.styles';
import { PORTFOLIOS_ROUTE } from '../../constants';
import { addPortfolio } from '../../services/portfolio';
import { createPortfolioObject } from '../../util/converter';

export default function Wizard() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(1);
  const [portfolioName, setPortfolioName] = useState('');
  const [addresses, setAddresses] = useState<string[]>([]);
  const stepAmount = 4;

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
    if (!addPortfolio(createPortfolioObject(portfolioName, addresses))) {
      alert('A portfolio with this name already exists!');
    } else {
      history.push(`${PORTFOLIOS_ROUTE}/${portfolioName}`);
    }
  };

  const renderWizardContent = () => {
    switch (activeStep) {
      case 1:
        return <DataSourceStep/>;
      case 2:
        return (
          <DataInputStep addresses={addresses} setAddresses={setAddresses}/>
        );
      case 3:
        return <WidgetsStep/>;
      case 4:
        return <NameStep name={portfolioName} setName={setPortfolioName}/>;
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
      <StyledFooter>
        {
          activeStep > 1 &&
          <Button onClick={handlePrevious}>Previous</Button>
        }
        <Button
          onClick={activeStep === stepAmount ? createPortfolio : handleNext}
        >
          { activeStep === stepAmount ? 'Finish' : 'Next' }
        </Button>
      </StyledFooter>
    </StyledWizard>
  );
}