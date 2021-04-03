import React from 'react';

interface Props {
  balances: any[];
}

export default function BalancesWidget({ balances }: Props) {
  console.log(balances)
  return (
    <div>
      BalancesWidget
    </div>
  );
}