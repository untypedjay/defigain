import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { TextInput } from './components/Input';
import { Button } from './components/Button';
import { getAccount } from './api/defichain';

function App() {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState([]);

  const getAccountBalance = async () => {
    setIsLoading(true);
    const data = await getAccount(address);
    setAccount(data);
    setIsLoading(false);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleButtonClick = () => {
    getAccountBalance();
    alert(account);
  };

  return (
    <div>
      <div>
        <TextInput onChange={handleInputChange}>{ address }</TextInput>
        <Button onClick={handleButtonClick} disabled={!address} loading={isLoading}>GO</Button>
      </div>
      { !isLoading && account.length > 0 ?
        <div>
          <p>{ account[0] } DFI</p>
          <p>{ account[1] } ETH</p>
          <p>{ account[2] } BTC</p>
          <p>{ account[3] } ETH-DFI</p>
          <p>{ account[4] } BTC-DFI</p>
        </div> :
        null
      }
    </div>
  );
}

export default App;
