import React, { useState, ChangeEvent } from 'react';
import './App.css';
import {TextInput} from './components/Input';

function App() {
  const [address, setAddress] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <TextInput onChange={handleChange}>{ address }</TextInput>
    </div>
  );
}

export default App;
