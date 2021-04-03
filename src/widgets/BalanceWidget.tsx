import React from 'react';

interface Props {
  balances: any[];
}

export default function BalanceWidget({ balances }: Props) {
  return (
    <div>
      {
        Object.keys(balances).map((key: any) => (
          <p key={key}>{ key }: { balances[key].toFixed(8) }</p>
        ))
      }
    </div>
  );
}