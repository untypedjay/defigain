import React, { useCallback, useEffect, useState } from 'react';
import { BalanceWidget } from '../widgets';
import { Layout } from '../components/Layout';
import NotFound from './NotFound';
import { getPortfolioByName } from '../services/portfolio';
import { getAccount } from '../api/defichain';
import { getAmount, getToken } from '../util/helper';

interface Props {
  match: any;
}

export default function Portfolio({ match }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [balance, setBalance] = useState<any>({});
  const { portfolioName } = match.params;
  const portfolio: any = getPortfolioByName(portfolioName);

  const addToBalance = (balance: any, additions: any) => {
    additions.forEach((addition: any) => {
      const token = getToken(addition);
      const amount = getAmount(addition);

      if (balance[token]) {
        balance[token] = balance[token] + amount;
      } else {
        balance[token] = amount;
      }
    });
  };

  const loadData = useCallback(async () => {
    const temporaryBalance = {};
    for (let index in portfolio.addresses) {
      const response = await getAccount(portfolio.addresses[index]);
      if (!Array.isArray(response)) {
        setError('An error occurred while fetching data from the blockchain. Please try again later.');
        return;
      }
      addToBalance(temporaryBalance, response);
    }

    setBalance(temporaryBalance);
    setIsLoading(false);
  }, [portfolio]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!portfolio) {
    return <NotFound/>;
  }

  return (
    <Layout>
      { error && <p>{ error }</p> }
      {
        isLoading && !error ? 'Loading...' :
        <BalanceWidget balances={balance}/>
      }
    </Layout>
  );
}