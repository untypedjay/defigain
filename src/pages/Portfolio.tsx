import React from 'react';
import { Layout } from '../components/Layout';
import NotFound from './NotFound';
import { getPortfolioByName } from '../services/portfolio';

interface Props {
  match: any;
}

export default function Portfolio({ match }: Props) {
  const { portfolioName } = match.params;
  const portfolio =  getPortfolioByName(portfolioName);
  console.log(portfolio)

  if (!portfolio) {
    return <NotFound/>;
  }

  return (
    <Layout>
      Portfolio { portfolioName }
    </Layout>
  );
}