import React from 'react';
import { Layout } from '../components/Layout';
import { PortfolioCard } from '../components/Card';
import { getAllPortfolios } from '../services/portfolio';

export default function Portfolios() {
  const portfolios = getAllPortfolios();

  return (
    <Layout>
      { portfolios.length > 0 ?
        <div>
          {
            portfolios.map((portfolio: any) => (
              <PortfolioCard key={portfolio.name}>{ portfolio }</PortfolioCard>
            ))
          }
        </div> :
        <p>No projects yet.</p>
      }
    </Layout>
  );
}