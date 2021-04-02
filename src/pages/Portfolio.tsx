import React from 'react';
import { Layout } from '../components/Layout';

interface Props {
  match: any;
}

export default function Portfolio({ match }: Props) {
  const { portfolioName } = match.params;

  return (
    <Layout>
      Portfolio { portfolioName }
    </Layout>
  );
}