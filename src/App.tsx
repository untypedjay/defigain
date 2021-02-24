import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { TextInput } from './components/Input';
import { Button } from './components/Button';
import { getAccount } from './api/defichain';
import { formatAccount } from './util/converter';

function App() {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [account, setAccount] = useState<any>(null);

  const getAccountBalance = async () => {
    setIsLoading(true);
    const data = await getAccount(address);
    setAccount(formatAccount(data));
    setIsLoading(false);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <div>
        <TextInput onChange={handleInputChange}>{ address }</TextInput>
        <Button onClick={getAccountBalance} disabled={!address} loading={isLoading}>GO</Button>
      </div>
      { !isLoading && account ?
        <div>
          <p>{ account.dfi } DFI</p>
          <p>{ account.eth } ETH</p>
          <p>{ account.btc } BTC</p>
          <p>{ account['eth-dfi'] } ETH-DFI</p>
          <p>{ account['btc-dfi'] } BTC-DFI</p>
        </div> :
        null
      }
    </div>
  );
}

export default App;
