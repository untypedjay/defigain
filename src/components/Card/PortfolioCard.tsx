import React from 'react';
import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie, FaList
} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { PORTFOLIOS_ROUTE } from '../../constants';

interface Props {
  children: any;
}

export default function PortfolioCard({ children }: Props) {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`${PORTFOLIOS_ROUTE}/${children.name}`);
  };

  return (
    <button onClick={handleOnClick}>
      <h3>{ children.name }</h3>
      <p>1.000.000,00 €</p>
      <div>
        <FaList/>
        <FaChartPie/>
        <FaChartLine/>
        <FaChartBar/>
        <FaChartArea/>
      </div>
    </button>
  );
}