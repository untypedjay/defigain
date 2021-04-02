import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileUpload, FaPlus, FaQuestionCircle, FaTh } from 'react-icons/fa';
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  NEW_ROUTE,
  PORTFOLIOS_ROUTE,
  UPLOAD_ROUTE
} from '../../constants';
import { StyledNav, StyledLogo } from './Menu.styles';
import Logo from '../../assets/logo.png';

export default function Menu() {
  const iconSize = '35px';
  return (
    <StyledNav>
      <Link to={HOME_ROUTE} title="Home">
        <StyledLogo src={Logo} alt="Logo DeFiGain"/>
      </Link>
      <Link to={PORTFOLIOS_ROUTE} title="Portfolios">
        <FaTh size={iconSize}/>
      </Link>
      <Link to={NEW_ROUTE} title="New Portfolio">
        <FaPlus size={iconSize}/>
      </Link>
      <Link to={UPLOAD_ROUTE} title="Upload Portfolio">
        <FaFileUpload size={iconSize}/>
      </Link>
      <Link to={ABOUT_ROUTE} title="About DeFiGain">
        <FaQuestionCircle size={iconSize}/>
      </Link>
    </StyledNav>
  );
}