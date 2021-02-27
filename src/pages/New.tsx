import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Stepper } from '../components/Stepper';

export default function New() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Layout>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep}/>
    </Layout>
  );
}