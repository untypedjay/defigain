import React from 'react';
import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie, FaList
} from 'react-icons/fa';

export default function PortfolioCard() {
  return (
    <button>
      <h3>PortfolioName</h3>
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