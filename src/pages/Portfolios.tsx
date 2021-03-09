import React from 'react';
import { Layout } from '../components/Layout';
import { PortfolioCard } from '../components/Card';

export default function Portfolios() {
  return (
    <Layout>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
    </Layout>
  );
}