import React, { useState } from 'react';
import { FaKeyboard, FaWallet } from 'react-icons/fa';
import { RichRadioButton } from '../Input';
import { StyledFlexbox } from '../../styles/FlexboxStyle';

export default function DataSourceStep() {
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
          text="Connect your wallet addresses"
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