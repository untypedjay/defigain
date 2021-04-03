import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import NotFound from './NotFound';
import { getPortfolioByName } from '../services/portfolio';
import { getAccount } from '../api/defichain';

interface Props {
  match: any;
}

export default function Portfolio({ match }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [balance, setBalance] = useState<any[]>([]);
  const { portfolioName } = match.params;
  const portfolio: any = getPortfolioByName(portfolioName);

  const loadData = async () => {
    const responses = [];
    for (let index in portfolio.addresses) {
      responses.push(await getAccount(portfolio.addresses[index]));
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
        isLoading ? 'Loading...' : `Portfolio: ${portfolio.name}`
      }
    </Layout>
  );
}