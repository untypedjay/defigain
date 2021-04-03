import React, { useEffect, useState } from 'react';
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

  const loadData = async () => {
    const responses = {};
    for (let index in portfolio.addresses) {
      addToBalance(responses, await getAccount(portfolio.addresses[index]));
    }

    setBalance(responses);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

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