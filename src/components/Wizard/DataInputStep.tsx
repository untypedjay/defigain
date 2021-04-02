import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextInput } from '../Input';

interface Props {
  addresses: string[];
  setAddresses: (newAddresses: string[]) => void;
}

export default function DataInputStep({ addresses, setAddresses }: Props) {
  const [currentAddress, setCurrentAddress] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentAddress(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (addresses.indexOf(currentAddress) !== -1) {
        alert('This address has already been added!');
      } else {
        const newAddresses = [...addresses];
        newAddresses.push(currentAddress);
        setAddresses(newAddresses);
      }
      setCurrentAddress('');
    }
  };

  return (
    <div>
      <h3>Data Input</h3>
      {
        addresses.map((address: string) => (
          <p key={address}>{ address }</p>
        ))
      }
      <TextInput
        onChange={handleInputChange}
        placeholder="Enter DeFiChain address..."
        onKeyPress={handleKeyPress}
      >
        { currentAddress }
      </TextInput>
    </div>
  );
}