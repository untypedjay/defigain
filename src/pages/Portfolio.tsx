import React from 'react';

interface Props {
  match: any;
}

export default function Portfolio({ match }: Props) {
  const { portfolioName } = match.params;
  return (
    <div>
      Portfolio { portfolioName }
    </div>
  );
}