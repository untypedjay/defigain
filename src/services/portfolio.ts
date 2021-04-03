import { findByProperty } from '../util/helper';

export function getAllPortfolios() {
  return JSON.parse(localStorage.getItem('portfolios') || '[]');
}

export function getPortfolioByName(portfolioName: string) {
  const portfolios = getAllPortfolios();
  return findByProperty(portfolios, 'name', portfolioName);
}

export function addPortfolio(portfolio: any) {
  if (getPortfolioByName(portfolio.name) !== null) {
    return false;
  }
  const portfolios = getAllPortfolios();
  portfolios.push(portfolio);
  localStorage.setItem('portfolios', JSON.stringify(portfolios));
  return true;
}

export function updatePortfolio(portfolio: any) {
  const oldPortfolio = getPortfolioByName(portfolio.name);
  if (oldPortfolio) {
    const portfolios = getAllPortfolios();
    const index = portfolios.indexOf(oldPortfolio);
    if (index > -1) {
      portfolios.splice(index, 1);
      portfolios.push(portfolio);
      localStorage.setItem('portfolios', JSON.stringify(portfolios));
      return true;
    }
  }
  return false;
}

export function deletePortfolio(portfolio: any) {
  const portfolios = getAllPortfolios();
  const index = portfolios.indexOf(portfolio);
  if (index > -1) {
    portfolios.splice(index, 1);
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
    return true;
  }
  return false;
}