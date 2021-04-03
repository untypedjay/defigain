import React from 'react';
import { Layout } from '../components/Layout';
import { PortfolioCard } from '../components/Card';
import { getAllPortfolios } from '../services/portfolio';

export default function Portfolios() {
  console.log(getAllPortfolios());

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