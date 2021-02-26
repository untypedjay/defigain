import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileUpload, FaPlus, FaQuestionCircle, FaTh } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const StyledNav = styled.nav`
  background-color: var(--clr-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    padding: 1em;
    width: 100%;
    
  }
  
  svg {
    fill: var(--clr-primary);
    width: 100%;
    transition: var(--hover-transition);
  }
  
  a:hover {
    
    svg {
      fill: var(--clr-primary-hover);
    }
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 40px;
  object-fit: contain;
`;

export default function Menu() {
  const iconSize = '35px';
  return (
    <StyledNav>
      <Link to="/" title="Home"><StyledLogo src={Logo} alt="Logo DeFiGain"/></Link>
      <Link to="/portfolios" title="Portfolios"><FaTh size={iconSize}/></Link>
      <Link to="/new" title="New Portfolio"><FaPlus size={iconSize} className="test"/></Link>
      <Link to="/upload" title="Upload Portfolio"><FaFileUpload size={iconSize}/></Link>
      <Link to="/about" title="About DeFiGain"><FaQuestionCircle size={iconSize}/></Link>
    </StyledNav>
  );
}