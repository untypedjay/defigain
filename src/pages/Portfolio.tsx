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
  const [balance, setBalance] = useState<any>({});
  const { portfolioName } = match.params;
  const portfolio: any = getPortfolioByName(portfolioName);

  const addToBalance = (balance: any, additions: any) => {
    console.log(additions)
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
    const responses = {};
    for (let index in portfolio.addresses) {
      addToBalance(responses, await getAccount(portfolio.addresses[index]));
    }

    setBalance(responses);
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
      {
        isLoading ? 'Loading...' :
        <BalanceWidget balances={balance}/>
      }
    </Layout>
  );
}